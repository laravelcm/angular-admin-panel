import { Injectable } from '@angular/core';

import { adminMenu } from '@modules/dashboard/navigation/admin.menu';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { Menu } from '@app/shared/interfaces/menu';
import { ADMIN_ROLE, DEVELOPER_ROLE } from '@app/core/guards/user.roles';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menus!: Menu[];

  constructor(private localStorageService: LocalStorageService) {}

  renderSidebar(): Menu[] {
    const roles = this.localStorageService.getLocalStorage('roles')!;
    const USER_ROLES: string[] = JSON.parse(roles);

    if (
      USER_ROLES.includes(ADMIN_ROLE) ||
      USER_ROLES.includes(DEVELOPER_ROLE)
    ) {
      this.menus = adminMenu;
    }

    return this.menus;
  }
}
