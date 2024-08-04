import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  @ViewChild('targetElement') targetElement!: ElementRef;

  scrollToElement(): void {
    console.log(this.targetElement);
  }
}
