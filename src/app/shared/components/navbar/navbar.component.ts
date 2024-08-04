import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthController } from '../../controllers/auth.controller';
import { User } from '../../models/user.model';
import { ScrollService } from '../../services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  currentUser?: User;
  showNavbar = false;
  showUserSettings = false;

  constructor(
    private authController: AuthController,
    private scrollService: ScrollService
  ) {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  toggleUserSettings() {
    this.showUserSettings = !this.showUserSettings;
  }

  isEmpty() {
    return (
      this.currentUser?.username === '' && this.currentUser?.password === ''
    );
  }

  get firstName(): string {
    return this.currentUser?.username
      ? this.currentUser.username.split(' ')[0][0]
      : '';
  }

  get lastName(): string {
    return this.currentUser?.username
      ? this.currentUser.username.split(' ')[1][0]
      : '';
  }

  ngOnInit(): void {
    this.currentUser = {
      username: this.authController.user?.username ?? '',
      email: this.authController.user?.email ?? '',
      password: this.authController.user?.password ?? '',
      country: this.authController.user?.country ?? '',
      dataOfBirth: this.authController.user?.dataOfBirth ?? '',
    };
    // this.authController.getCurrentUser();
  }

  scrollTo(elementId: string) {
    this.scrollService.setScrollElement(elementId);
    this.showUserSettings = false;
  }

  onClickLogout() {
    this.authController.logout();
  }
}
