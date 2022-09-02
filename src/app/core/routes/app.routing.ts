import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => 
      import('@modules/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@modules/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }
];