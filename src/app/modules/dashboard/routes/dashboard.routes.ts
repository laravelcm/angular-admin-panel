import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: '',
    children: [],
  }
];