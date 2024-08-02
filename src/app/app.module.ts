import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { LogoutComponent } from './account/logout/logout.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { CurrencyDropdownComponent } from './shared/components/currency-dropdown/currency-dropdown.component';
import { TransferMoneyComponent } from './account/transfer-money/transfer-money.component';
import { GettingStartedComponent } from './shared/components/getting-started/getting-started.component';
import { MobileApplicationComponent } from './shared/components/mobile-application/mobile-application.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MyAccountComponent } from './account/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    HeroSectionComponent,
    CurrencyDropdownComponent,
    TransferMoneyComponent,
    GettingStartedComponent,
    MobileApplicationComponent,
    FooterComponent,
    MyAccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
