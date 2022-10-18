import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { MonthViewComponent } from './month/month-view.component';

@NgModule({
  declarations: [CalendarComponent, MonthViewComponent],
  imports: [CommonModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
