// activity-detector.directive.ts
import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appActivityDetector]',
})
export class ActivityDetectorDirective {
  constructor(private authService: AuthService) {}

  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  onUserActivity() {
    this.authService.resetInactivityTimer();
  }
}
