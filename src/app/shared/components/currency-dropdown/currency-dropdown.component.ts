import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.scss',
})
export class CurrencyDropdownComponent {
  countryOptionOne = 'USD';
  countryOptionTwo = 'USD';
  showOptionOne = false;
  showOptionTwo = false;

  constructor(private router: Router) {}

  toggleShowOptionOne() {
    this.showOptionOne = !this.showOptionOne;
    this.showOptionTwo = false;
  }

  toggleShowOptionTwo() {
    this.showOptionTwo = !this.showOptionTwo;
    this.showOptionOne = false;
  }

  onClickOptionOne(currentOption: string) {
    this.countryOptionOne = currentOption;
    this.showOptionOne = false;
  }

  onClickOptionTwo(currentOption: string) {
    this.countryOptionTwo = currentOption;
    this.showOptionTwo = false;
  }

  onClickContinue() {
    this.router.navigate(['/transfer-money']);
  }
}
