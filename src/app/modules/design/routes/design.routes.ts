import { Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { RoleGuard } from '@app/core/guards/role.guard';
import { ADMIN_ROLE } from '@app/core/guards/user.roles';

import { CpanelComponent } from '@app/shared/themes/layouts/cpanel/cpanel.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';

export const designRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, RoleGuard],
    component: CpanelComponent,
    children: [
      { path: '', redirectTo: 'calendar', pathMatch: 'full' },
      {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: [ADMIN_ROLE],
          },
        },
      },
    ],
  },
];
