import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(): boolean {
    if (!this.localStorageService.tokenExpired()) {
      this.router.navigateByUrl('/dashboard');

      return false;
    }

    return true;
  }
}
