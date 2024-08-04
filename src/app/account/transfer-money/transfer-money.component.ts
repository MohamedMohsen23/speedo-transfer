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
  currentStep = 1;
  sendAmount: string = '';
  recipientGets: string = '';
  recipientName: string = '';
  recipientAccount: string = '';

  toggleOptions() {
    this.showOptionOne = !this.showOptionOne;
  }

  toggleShowOptionOne() {
    this.showOptionOne = !this.showOptionOne;
    this.showOptionTwo = false;
  }
  toggleShowOptionTwo() {
    this.showOptionTwo = !this.showOptionTwo;
    this.showOptionOne = false;
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.goToNextStep();
    }
  }
  goToNextStep() {
    this.currentStep++;
  }
  get paragraphText(): string {
    switch (this.currentStep) {
      case 1:
        return 'Amount';
      case 2:
        return 'Confirmation';
      case 3:
        return 'Payment';
      default:
        return '';
    }
  }
  goBack() {
    this.currentStep--;
  }
}
