import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
})
export class PaymentsHistoryComponent implements OnInit {
  paymentsHistory: any = [];
  paymentHistory: any = {};
  constructor(
    private clipboardService: ClipboardService,
    private accountService: AccountService
  ) {}

  copyToCliboard() {
    this.clipboardService.copyFromContent(
      this.paymentHistory.recipientCardNumber
    );
  }

  ngOnInit(): void {
    this.accountService.getPaymentsHistory().subscribe((data: any) => {
      data.content.map((ph: any) => {
        this.paymentHistory.recipientCardNumber = ph.recipientCardNumber;
        this.paymentHistory.recipientUserName = ph.recipientUserName;
        this.paymentHistory.amount = ph.amount;
      });
      this.paymentsHistory.push(this.paymentHistory);
    });
  }
}
