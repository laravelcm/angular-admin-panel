import { Routes } from '@angular/router';

import { GuestGuard } from '@core/guards/guest.guard';
import { AuthComponent } from '@app/shared/themes/layouts/auth/auth.component';

import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { LoginComponent } from '../pages/login/login.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', 
    canActivateChild: [GuestGuard],
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ]
  }
];