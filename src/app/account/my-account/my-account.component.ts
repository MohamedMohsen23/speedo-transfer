import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { numericOnlyValidator } from './phone.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {
  acitveDiv = 'my-profile';
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

  constructor(
    private clipboardService: ClipboardService,
    private router: Router
  ) {}

  onClickBtn(currentDiv: string) {
    this.acitveDiv = currentDiv;
  }

  copyToCliboard(text: string) {
    this.clipboardService.copyFromContent(text);
  }

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
      console.log('Change Password Form Updated', this.settingsForm.value);
    } else {
      console.log('Form is invalid');
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
