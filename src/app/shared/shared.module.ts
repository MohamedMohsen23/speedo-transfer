import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from './components/home/home.component';
import { MobileApplicationComponent } from './components/mobile-application/mobile-application.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CurrencyDropdownComponent,
    FooterComponent,
    GettingStartedComponent,
    HeroSectionComponent,
    HomeComponent,
    MobileApplicationComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
})
export class SharedModule {}
