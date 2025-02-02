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
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @ViewChild('userSetting') userSetting!: ElementRef;
  // currentUser?: User;
  userName: string = '';
  showNavbar = false;
  showUserSettings = false;

  constructor(
    private scrollService: ScrollService,
    private authService: AuthService,
    private accountService: AccountService
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
    if (
      this.userSetting &&
      !this.userSetting.nativeElement.contains(event.target)
    ) {
      this.showUserSettings = false;
    }
  }

  get firstName(): string {
    return this.userName ? this.userName.split(' ')[0][0] : '';
  }

  get lastName(): string {
    return this.userName ? this.userName.split(' ')[1][0] : '';
  }

  ngOnInit(): void {
    // this.currentUser = {
    //   username: this.authService.user?.username ?? '',
    //   email: this.authService.user?.email ?? '',
    //   password: this.authService.user?.password ?? '',
    //   country: this.authService.user?.country ?? '',
    //   dataOfBirth: this.authService.user?.dataOfBirth ?? '',
    // };
    this.accountService.getCurrentUser().subscribe((data: any) => {
      this.userName = data.name;
    });
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
