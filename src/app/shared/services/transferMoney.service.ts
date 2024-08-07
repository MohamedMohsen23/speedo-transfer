import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants/constants';
import { AuthService } from './auth.service';

interface TransferData {
  senderCardNumber: string;
  recipientCardNumber: string;
  senderUserName: string;
  senderEmail: string;
  recipientUserName: string;
  recipientEmail: string;
  amount: number;
  date: string;
}
@Injectable({
  providedIn: 'root',
})
export class TransferMoneyService {
  constructor(private authservice: AuthService, private api: HttpClient) {}

  transferMoney(data: TransferData) {
    const headers = this.authservice.createAuthorizationHeader({
      Authorization: `Bearer ${this.authservice.getToken()}`,
    });
    return this.api.post(`${BASE_URL}/transfer`, data, { headers: headers });
  }

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
    return this.api.post(`${BASE_URL}/favorites`, {}, { headers: headers });
  }
}
