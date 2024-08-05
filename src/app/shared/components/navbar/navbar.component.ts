import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from '../../models/user.model';
import { ScrollService } from '../../services/scroll.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @ViewChild('userSetting') userSetting!: ElementRef;
  currentUser?: User;
  showNavbar = false;
  showUserSettings = false;

  constructor(
    private scrollService: ScrollService,
    private authService: AuthService
  ) {}

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  toggleUserSettings() {
    this.showUserSettings = !this.showUserSettings;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  hideNavbar() {
    this.showNavbar = false;
  }

  // Handle Click Outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.userSetting.nativeElement.contains(event.target)) {
      this.showUserSettings = false;
    }
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
      username: this.authService.user?.username ?? '',
      email: this.authService.user?.email ?? '',
      password: this.authService.user?.password ?? '',
      country: this.authService.user?.country ?? '',
      dataOfBirth: this.authService.user?.dataOfBirth ?? '',
    };
    // this.authSerivce.getCurrentUser();
  }

  scrollTo(elementId: string) {
    this.scrollService.setScrollElement(elementId);
    this.showUserSettings = false;
  }

  onClickLogout() {
    this.authService.logout();
    this.showUserSettings = false;
  }
}
