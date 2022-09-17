import { Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { RoleGuard } from '@app/core/guards/role.guard';
import { UserDataGuard } from '@app/core/guards/user-data.guard';

import { CpanelComponent } from '@app/shared/themes/layouts/cpanel/cpanel.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { ADMIN_ROLE, DEVELOPER_ROLE } from '@app/core/guards/user.roles';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: CpanelComponent,
    canActivate: [AuthGuard, UserDataGuard, RoleGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: [ADMIN_ROLE, DEVELOPER_ROLE],
          },
        },
      },
    ],
  },
];
