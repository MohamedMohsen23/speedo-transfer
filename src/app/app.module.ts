import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { LogoutComponent } from './account/logout/logout.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { CurrencyDropdownComponent } from './shared/components/currency-dropdown/currency-dropdown.component';
import { TransferMoneyComponent } from './account/transfer-money/transfer-money.component';

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
    TransferMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
