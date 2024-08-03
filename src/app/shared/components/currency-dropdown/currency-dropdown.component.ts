import { Component } from '@angular/core';

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
}
