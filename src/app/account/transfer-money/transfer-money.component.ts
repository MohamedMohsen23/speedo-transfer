import { Component } from '@angular/core';


@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrl: './transfer-money.component.scss',
})
export class TransferMoneyComponent {
  showOptionOne = false;
  showOptionTwo = false;
  amount: number = 0;

  toggleShowOptionOne() {
    this.showOptionOne = !this.showOptionOne;
    this.showOptionTwo = false;
  }
  toggleShowOptionTwo() {
    this.showOptionTwo = !this.showOptionTwo;
    this.showOptionOne = false;
  }
  onSubmit() {
    console.log('Amount sent:', this.amount);
  }
}
