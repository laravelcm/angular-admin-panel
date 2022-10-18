import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
