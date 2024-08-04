import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { numericOnlyValidator } from './phone.validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  activeSetting = 'profile';

  settingsForm: FormGroup = new FormGroup({
    userName: new FormControl('Jonathon', Validators.required),
    lastName: new FormControl('Smith', Validators.required),
    phone: new FormControl('+880125412624', [
      Validators.required,
      numericOnlyValidator(),
    ]),
    email: new FormControl('jhonathonsmith@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
  });

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

  onClickSetting(currenSetting: string) {
    this.activeSetting = currenSetting;
  }

  settingsFormSubmit() {
    if (this.settingsForm.valid) {
      console.log('Settings Form Updated', this.settingsForm.value);
    } else {
      console.log('Form is invalid');
      this.settingsForm.markAllAsTouched();
    }
  }

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
