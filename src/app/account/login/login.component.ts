import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}
  showPassword = false;

  loginForm: FormGroup = new FormGroup({
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
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
      this.router.navigate(['']);
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }
}
