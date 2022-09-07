import { Routes } from '@angular/router';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { UserDataGuard } from '@app/core/guards/user-data.guard';

import { CpanelComponent } from '@app/shared/themes/layouts/cpanel/cpanel.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: CpanelComponent,
    canActivateChild: [AuthGuard, UserDataGuard],
    children: [
      { path: '', component: DashboardComponent },
    ],
  }
];