import { Routes } from '@angular/router';

import { GuestGuard } from '@core/guards/guest.guard';

import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { LoginComponent } from '../pages/login/login.component';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', 
    canActivateChild: [GuestGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'reset-password', component: ResetPasswordComponent },
    ]
  }
];