import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { RegisterUserData } from '../../shared/models/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showPassword = false;
  showConfirmPassword = false;
  registerForm!: FormGroup;

  userData: RegisterUserData = {
    userName: '',
    email: '',
    password: '',
    gender: 'male',
    dateOfBirth: '',
    country: '',
  };

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        userName: ['Youssef Gad', Validators.required],
        email: ['test@test.gmail.com', [Validators.required, Validators.email]],
        country: ['egypt', Validators.required],
        dobDay: [
          '3',
          [Validators.required, Validators.min(1), Validators.max(31)],
        ],
        dobMonth: ['1', Validators.required],
        dobYear: [
          '2003',
          [Validators.required, Validators.min(1900), Validators.max(2005)],
        ],
        password: [
          '1111111111',
          [Validators.required, Validators.minLength(8)],
        ],
        confirmPassword: ['1111111111', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register({
        userName: this.registerForm.value.userName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        country: this.registerForm.value.country,
        dateOfBirth: `${this.registerForm.value.dobYear}-${
          this.registerForm.value.dobMonth < 10 ? '0' : ''
        }${this.registerForm.value.dobMonth}-${
          this.registerForm.value.dobDay < 10 ? '0' : ''
        }${this.registerForm.value.dobDay}`,
        gender: 'male',
      });

      console.log('Form Submitted');
    } else {
      console.log('Form is invalid');
      this.registerForm.markAllAsTouched();
    }
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
