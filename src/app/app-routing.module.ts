import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { RegisterComponent } from './account/register/register.component';
import { TransferMoneyComponent } from './account/transfer-money/transfer-money.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { MyProfileComponent } from './account/my-profile/my-profile.component';
import { PaymentsHistoryComponent } from './account/payments-history/payments-history.component';
import { SettingsComponent } from './account/settings/settings.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'transfer-money',
        component: TransferMoneyComponent,
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
        children: [
          { path: '', component: MyProfileComponent },
          { path: 'payments-history', component: PaymentsHistoryComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'change-password', component: ChangePasswordComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
