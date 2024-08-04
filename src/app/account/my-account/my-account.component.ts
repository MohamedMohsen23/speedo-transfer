import { AfterViewInit, Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollService.scrollToElement('targetElement');
  }
}
