import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent implements OnInit {
  name: string = '';
  email: string = '';
  gender: string = '';
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe((data: any) => {
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
    });
  }
}
