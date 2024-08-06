import { Component, OnInit } from '@angular/core';
import { TransferMoneyService } from '../../shared/services/transferMoney.service';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrl: './transfer-money.component.scss',
})
export class TransferMoneyComponent implements OnInit {
  showFavourites = false;
  showOptionOne = false;
  showOptionTwo = false;
  currentStep = 1;
  currentUserName: string = '';
  currentUserEmail: string = '';
  sendAmount: number = 0;
  recipientGets: string = '';
  recipientName: string = '';
  recipientAccount: string = '';
  countryOptionOne = 'USD';
  countryOptionTwo = 'USD';
  favouritesList: any = [];

  constructor(
    private transferMoneyService: TransferMoneyService,
    private accountService: AccountService
  ) {}

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
  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe((data: any) => {
      this.currentUserName = data.name;
      this.currentUserEmail = data.email;
    });
  }
  confirmTransfer() {
    this.transferMoneyService.transferMoney({
      senderCardNumber: '123',
      recipientCardNumber: '123',
      senderUserName: this.currentUserName,
      senderEmail: this.currentUserEmail,
      recipientUserName: this.recipientName,
      recipientEmail: this.recipientAccount,
      amount: this.sendAmount,
      date: '01/01/2000',
    });
  }
}
