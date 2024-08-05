import { Component } from '@angular/core';
import { transferMoneyService } from '../../shared/services/transferMoney.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrl: './transfer-money.component.scss',
})
export class TransferMoneyComponent {
  showFavourites = false;
  showOptionOne = false;
  showOptionTwo = false;
  amount: number = 0;
  currentStep = 1;
  sendAmount: string = '';
  recipientGets: string = '';
  recipientName: string = '';
  recipientAccount: string = '';
  countryOptionOne = 'USD';
  countryOptionTwo = 'USD';
  favouritesList: any = [];

  constructor(private transferMoneyService: transferMoneyService) {}

  onClickOptionOne(currentOption: string) {
    this.countryOptionOne = currentOption;
    this.showOptionOne = false;
  }

  onClickOptionTwo(currentOption: string) {
    this.countryOptionTwo = currentOption;
    this.showOptionTwo = false;
  }
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
  toggleShowFavourites() {
    this.showFavourites = !this.showFavourites;
  }
  hideFavourites() {
    this.showFavourites = false;
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.goToNextStep();
    }
  }
  goToNextStep() {
    this.currentStep++;
    console.log(this.currentStep);
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
  onClickAddFavourites() {
    this.currentStep++;
    this.transferMoneyService.addFavourites(this.recipientAccount);
  }
  getFavouritesList() {
    this.transferMoneyService
      .getFavourites()
      .subscribe((data) => (this.favouritesList = data));
  }
}
