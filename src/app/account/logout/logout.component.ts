import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(private router: Router) {}

  showPassword = false;
  showAlretBox = true;

  logoutForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
  });

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  hideAlretBox() {
    this.showAlretBox = false;
  }

  onSubmit() {
    if (this.logoutForm.valid) {
      console.log('Logout Form Submitted', this.logoutForm.value);
      this.router.navigate(['']);
    } else {
      console.log('Form is invalid');
      this.logoutForm.markAllAsTouched();
    }
  }
}
