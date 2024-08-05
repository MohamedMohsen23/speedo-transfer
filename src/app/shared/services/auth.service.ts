import { Injectable } from '@angular/core';
import {
  AuthController,
  RegisterUserData,
} from '../controllers/auth.controller';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private authController: AuthController) {}

  register(userData: RegisterUserData) {
    this.authController.register(userData);
  }
  login(email: string, password: string) {
    this.authController.login(email, password);
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
