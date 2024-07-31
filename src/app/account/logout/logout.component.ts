import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  showPassword = false;
  showAlretBox = true;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  hideAlretBox() {
    this.showAlretBox = false;
  }
}
