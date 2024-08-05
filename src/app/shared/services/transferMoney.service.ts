import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants/constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class transferMoneyService {
  constructor(private authservice: AuthService, private api: HttpClient) {}

  addFavourites(recipientEmail: string) {
    const headers = this.authservice.createAuthorizationHeader({
      Authorization: `Bearer ${this.authservice.getToken()}`,
    });
    return this.api.post(
      `${BASE_URL}/favorites`,
      { recipientEmail },
      { headers: headers }
    );
  }

  getFavourites() {
    const headers = this.authservice.createAuthorizationHeader({
      Authorization: `Bearer ${this.authservice.getToken()}`,
    });
    return this.api.post(`${BASE_URL}/favorites`, { headers: headers });
  }
}
