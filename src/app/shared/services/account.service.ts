import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private authservice: AuthService, private api: HttpClient) {}

  getCurrentUser() {
    const headers = this.authservice.createAuthorizationHeader({
      Authorization: `Bearer ${this.authservice.getToken()}`,
    });
    return this.api.get(`${BASE_URL}/user`, { headers: headers });
  }

  getPaymentsHistory() {
    const headers = this.authservice.createAuthorizationHeader({
      Authorization: `Bearer ${this.authservice.getToken()}`,
    });
    return this.api.get(`${BASE_URL}/transactions?page=0&&size=20`, {
      headers: headers,
    });
  }
}
