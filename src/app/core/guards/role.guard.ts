import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private ngxPermissionsService: NgxPermissionsService
  ) {}

  canActivate(): boolean {
    const roles = this.localStorageService.getLocalStorage('roles');

    if (roles) {
      const USER_ROLES = JSON.parse(roles);
      this.ngxPermissionsService.loadPermissions(USER_ROLES);

      return true;
    }

    return false;
  }
}
