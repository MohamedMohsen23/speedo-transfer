import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse, RegisterUserData } from '../models/auth.interface';
import { BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  public user: User | null = null;

  constructor(private api: HttpClient, private router: Router) {}

  createAuthorizationHeader(additionalHeaders?: {
    [key: string]: string;
  }): HttpHeaders {
    const defaultHeaders = {
      Authorization: 'Basic ' + btoa('username:password'),
      'bypass-tunnel-reminder': '1',
    };

    const headers = additionalHeaders
      ? { ...defaultHeaders, ...additionalHeaders }
      : defaultHeaders;

    return new HttpHeaders(headers);
  }

  register(userData: RegisterUserData) {
    const headers = this.createAuthorizationHeader();
    this.api.post(`${BASE_URL}/register`, userData, { headers: headers });

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
    const headers = this.createAuthorizationHeader();
    return this.api
      .post<LoginResponse>(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        { headers: headers }
      )
      .subscribe((res) => {
        this.setToken(res.token);
        this.router.navigate(['/']);
        localStorage.setItem('token', res.token);
      });
  }

  getCurrentUser() {
    const headers = this.createAuthorizationHeader({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this.api
      .get(`${BASE_URL}/user`, { headers: headers })
      .subscribe((res) => console.log(res));
  }

  logout() {
    const headers = this.createAuthorizationHeader({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this.api.post(`${BASE_URL}/logout`, { headers: headers });
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }
}
