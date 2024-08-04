import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export interface RegisterUserData {
  email: string;
  userName: string;
  password: string;
  gender: string;
  dateOfBirth: string;
  country: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthController {
  private BASE_URL = 'http://localhost:8080/api';
  private isAuthenticated: boolean = false;
  public user: User | null = null;

  constructor(private api: HttpClient, private router: Router) {}

  register(userData: RegisterUserData) {
    this.api.post(`${this.BASE_URL}/register`, userData);
    this.isAuthenticated = true;
    this.user = new User(
      userData.userName,
      userData.password,
      userData.email,
      userData.country,
      userData.dateOfBirth
    );
    this.router.navigate(['/login']);
  }

  login(email: string, password: string) {
   this.api.post(`${this.BASE_URL}/login`, { email, password });
    this.isAuthenticated = true;
    this.router.navigate(['/']);
  }
}
