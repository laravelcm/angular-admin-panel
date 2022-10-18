import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { dashboardRoutes } from './routes/dashboard.routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(dashboardRoutes), SharedModule],
})
export class DashboardModule {}
