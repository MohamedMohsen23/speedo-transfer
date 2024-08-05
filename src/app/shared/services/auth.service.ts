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
  private logoutTimer: any;

  constructor(private api: HttpClient, private router: Router) {}

  // Added Headers To All Apis
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
        this.startInactivityTimer();
        this.setToken(res.token);
        this.router.navigate(['/']);
        localStorage.setItem('token', res.token);
      });
  }

  logout() {
    const headers = this.createAuthorizationHeader({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this.api
      .post(`${BASE_URL}/logout`, { headers: headers })
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate(['/logout']);
        this.clearInactivityTimer();
      });
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  // Handle User Activity
  startInactivityTimer() {
    this.clearInactivityTimer();
    this.logoutTimer = setTimeout(() => this.logout(), 30 * 60 * 1000); // 30 minutes
    // this.logoutTimer = setTimeout(() => this.logout(), 2000); // 5 seconds
  }

  clearInactivityTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
  }

  resetInactivityTimer() {
    this.startInactivityTimer();
  }
}
