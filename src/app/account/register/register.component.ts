import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isPasswordVisible: boolean = true;
  isConfirmPasswordVisible: boolean = true;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      dobDay: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      dobMonth: ['', Validators.required],
      dobYear: ['', [Validators.required, Validators.min(1900), Validators.max(2005)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  togglePasswordVisibility(field: 'password' | 'confirm-password') {
    if (field === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else if (field === 'confirm-password') {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      this.router.navigate(['']);
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
