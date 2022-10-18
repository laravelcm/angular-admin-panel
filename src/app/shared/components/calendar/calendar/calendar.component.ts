import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IEvent, IRange, ITimeSelected } from '../interfaces';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'tw-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService],
})
export class CalendarComponent {
  @Input()
  get currentDate(): Date {
    return this._currentDate;
  }

  set currentDate(date: Date) {
    if (!date) {
      date = new Date();
    }

    this._currentDate = date;
    this.calendarService.setCurrentDate(date, true);
    this.onCurrentDateChanged.emit(this._currentDate);
  }

  @Input() locale = '';

  @Output() onCurrentDateChanged = new EventEmitter<Date>();
  @Output() onRangeChanged = new EventEmitter<IRange>();
  @Output() onEventSelected = new EventEmitter<IEvent>();
  @Output() onTimeSelected = new EventEmitter<ITimeSelected>();
  @Output() onTitleChanged = new EventEmitter<string>();

  private _currentDate!: Date;
  private hourParts = 1;
  private hourSegments = 1;
  private currentDateChangedFromChildrenSubscription!: Subscription;

  constructor(
    private calendarService: CalendarService,
    @Inject(LOCALE_ID) private appLocale: string
  ) {
    this.locale = appLocale;
  }
}
