import { Routes } from '@angular/router';

import { NotFoundComponent } from '@app/shared/themes/pages/not-found/not-found.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
