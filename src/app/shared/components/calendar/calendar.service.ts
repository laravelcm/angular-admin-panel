import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  ICalendarComponent,
  CalendarMode,
  QueryMode,
} from './interfaces';

@Injectable()
export class CalendarService {
  queryMode!: QueryMode;
  currentDateChangedFromParent$!: Observable<Date>;
  currentDateChangedFromChildren$!: Observable<Date>;
  eventSourceChanged$!: Observable<void>;

  private _currentDate!: Date;
  private currentDateChangedFromParent = new Subject<Date>();
  private currentDateChangedFromChildren = new Subject<Date>();
  private eventSourceChanged = new Subject<void>();

  constructor() {
    this.currentDateChangedFromParent$ =
      this.currentDateChangedFromParent.asObservable();
    this.currentDateChangedFromChildren$ =
      this.currentDateChangedFromChildren.asObservable();
    this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
  }

  setCurrentDate(val: Date, fromParent: boolean = false) {
    this._currentDate = val;
    if (fromParent) {
      this.currentDateChangedFromParent.next(val);
    } else {
      this.currentDateChangedFromChildren.next(val);
    }
  }

  get currentDate(): Date {
    return this._currentDate;
  }

  rangeChanged(component: ICalendarComponent) {
    if (this.queryMode === 'local') {
      if (component.eventSource && component.onDataLoaded) {
        component.onDataLoaded();
      }
    } else if (this.queryMode === 'remote') {
      component.onRangeChanged.emit(component.range);
    }
  }

  private getStep(mode: CalendarMode): {
    years: number;
    months: number;
    days: number;
  } {
    switch (mode) {
      case 'month':
        return {
          years: 0,
          months: 1,
          days: 0,
        };
      case 'week':
        return {
          years: 0,
          months: 0,
          days: 7,
        };
      case 'day':
        return {
          years: 0,
          months: 0,
          days: 1,
        };
    }
  }

  getAdjacentCalendarDate(mode: CalendarMode, direction: number): Date {
    let calculateCalendarDate = new Date(this.currentDate.getTime());
    const step = this.getStep(mode),
      year = calculateCalendarDate.getFullYear() + direction * step.years,
      month = calculateCalendarDate.getMonth() + direction * step.months,
      date = calculateCalendarDate.getDate() + direction * step.days;

    calculateCalendarDate.setFullYear(year, month, date);

    if (mode === 'month') {
      const firstDayInNextMonth = new Date(year, month + 1, 1);
      if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
        calculateCalendarDate = new Date(
          firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000
        );
      }
    }
    return calculateCalendarDate;
  }

  getAdjacentViewStartTime(
    component: ICalendarComponent,
    direction: number
  ): Date {
    const adjacentCalendarDate = this.getAdjacentCalendarDate(
      component.mode,
      direction
    );

    return component.getRange(adjacentCalendarDate).startTime;
  }

  loadEvents() {
    this.eventSourceChanged.next();
  }
}
