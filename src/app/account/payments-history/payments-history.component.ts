import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-payments-history',
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
})
export class PaymentsHistoryComponent {
  constructor(private clipboardService: ClipboardService) {}

  copyToCliboard(text: string) {
    this.clipboardService.copyFromContent(text);
  }
}
