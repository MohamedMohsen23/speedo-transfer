import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.scss',
})
export class CurrencyDropdownComponent {
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
}
