import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { designRoutes } from './routes/design.routes';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [RouterModule.forChild(designRoutes), SharedModule],
})
export class DesignModule {}
