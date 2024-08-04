import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private elementId: string | null = null;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.elementId) {
          this.scrollToElement(this.elementId);
          this.elementId = null;
        }
      });
  }

  setScrollElement(id: string) {
    this.elementId = id;
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, 0);
    }
  }
}
