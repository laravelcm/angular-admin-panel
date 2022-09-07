import { Routes } from '@angular/router';
import { AdminGuard } from '@app/core/guards/admin.guard';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { CpanelComponent } from '@app/shared/themes/layouts/cpanel/cpanel.component';
import { CreatePlanComponent } from '../pages/create-plan/create-plan.component';

export const SUBSCRIPTION_ROUTES: Routes = [
  { path: '', redirectTo: 'create-plan', pathMatch: 'full' },
  {
    path: '',
    canActivateChild: [AuthGuard, AdminGuard],
    component: CpanelComponent,
    children: [
      { path: 'create-plan', component: CreatePlanComponent }
    ],
  }
];