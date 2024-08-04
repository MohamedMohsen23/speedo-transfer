import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
  });

  changePasswordFormSubmit() {
    if (this.changePasswordForm.valid) {
      console.log(
        'Change Password Form Updated',
        this.changePasswordForm.value
      );
    } else {
      console.log('Form is invalid');
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
