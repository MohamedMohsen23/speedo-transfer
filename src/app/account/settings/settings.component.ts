import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { numericOnlyValidator } from './phone.validator';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  activeSetting = 'profile';
  name: string = '';
  email: string = '';
  userName: string = this.name.split(' ')[0];
  lastName: string = this.name.split(' ')[1];

  constructor(private accountService: AccountService) {}

  settingsForm: FormGroup = new FormGroup({
    userName: new FormControl(this.userName, Validators.required),
    lastName: new FormControl(this.lastName, Validators.required),
    phone: new FormControl('+880125412624', [
      Validators.required,
      numericOnlyValidator(),
    ]),
    email: new FormControl(this.email, [Validators.required, Validators.email]),
  });

  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe((data: any) => {
      this.name = data.name;
      this.email = data.email;
    });
  }

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
