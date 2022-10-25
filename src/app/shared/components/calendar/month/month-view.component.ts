import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

import {
  ICalendarComponent,
  IEvent,
  IMonthView,
  IMonthViewRow,
  ITimeSelected,
  IRange,
  CalendarMode,
  IDateFormatter,
  IMonthViewDisplayEventTemplateContext,
} from '../interfaces';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'month-view',
  templateUrl: './month-view.component.html',
})
export class MonthViewComponent
  implements OnInit, OnChanges, ICalendarComponent
{
  @Input()
  monthViewDisplayEventTemplate!: TemplateRef<IMonthViewDisplayEventTemplateContext>;
  @Input()
  monthViewDisplayResponsiveEventTemplate!: TemplateRef<IMonthViewDisplayEventTemplateContext>;
  @Input()
  monthViewInactiveDisplayEventTemplate!: TemplateRef<IMonthViewDisplayEventTemplateContext>;
  @Input()
  monthViewEventDetailTemplate!:
    | TemplateRef<IMonthViewDisplayEventTemplateContext>
    | any;

  @Input() formatDay!: string;
  @Input() formatDayHeader!: string;
  @Input() formatMonthTitle!: string;
  @Input() eventSource!: IEvent[];
  @Input() startingDayMonth!: number;
  @Input() showEventDetail!: boolean;
  @Input() noEventsLabel!: string;
  @Input() autoSelect = true;
  @Input() markDisabled!: (date: Date) => boolean;
  @Input() locale!: string;
  @Input() dateFormatter!: IDateFormatter;
  @Input() spaceBetween!: number;
  @Input() monthClass!: string;

  @Output() onRangeChanged = new EventEmitter<IRange>();
  @Output() onEventSelected = new EventEmitter<IEvent>();
  @Output() onTimeSelected = new EventEmitter<ITimeSelected>(true);
  @Output() onTitleChanged = new EventEmitter<string>(true);

  public view!: IMonthView;
  public currentViewIndex = 0;
  public selectedDate!: IMonthViewRow;
  public range!: IRange;
  public mode: CalendarMode = 'month';
  public direction = 0;

  private moveOnSelected = false;
  private inited = false;
  private currentDateChangedFromParentSubscription!: Subscription | null;
  private eventSourceChangedSubscription!: Subscription | null;
  private formatDayLabel!: (date: Date) => string;
  private formatDayHeaderLabel!: (date: Date) => string;
  private formatTitle!: (date: Date) => string;

  constructor(private calendarService: CalendarService) {}

  static getDates(startDate: Date, n: number): Date[] {
    const dates = new Array(n),
      current = new Date(startDate.getTime());
    let i = 0;
    current.setHours(12); // Prevent repeated dates because of timezone bug
    while (i < n) {
      dates[i++] = new Date(current.getTime());
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  ngOnInit() {
    if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
      this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
    } else {
      const dayLabelDatePipe = new DatePipe('en-US');
      this.formatDayLabel = (date: Date): string => {
        return dayLabelDatePipe.transform(date, this.formatDay)!;
      };
    }

    if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
      this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
    } else {
      const datePipe = new DatePipe(this.locale);
      this.formatDayHeaderLabel = (date: Date): string => {
        return datePipe.transform(date, this.formatDayHeader)!;
      };
    }

    if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
      this.formatTitle = this.dateFormatter.formatMonthViewTitle;
    } else {
      const datePipe = new DatePipe(this.locale);
      this.formatTitle = (date: Date) => {
        return datePipe.transform(date, this.formatMonthTitle)!;
      };
    }

    this.refreshView();
    this.inited = true;

    this.currentDateChangedFromParentSubscription =
      this.calendarService.currentDateChangedFromParent$.subscribe(() => {
        this.refreshView();
      });
    this.eventSourceChangedSubscription =
      this.calendarService.eventSourceChanged$.subscribe(() => {
        this.onDataLoaded();
      });
  }

  ngOnDestroy() {
    if (this.currentDateChangedFromParentSubscription) {
      this.currentDateChangedFromParentSubscription.unsubscribe();
      this.currentDateChangedFromParentSubscription = null;
    }

    if (this.eventSourceChangedSubscription) {
      this.eventSourceChangedSubscription.unsubscribe();
      this.eventSourceChangedSubscription = null;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.inited) {
      return;
    }

    const eventSourceChange = changes['eventSource'];
    if (eventSourceChange && eventSourceChange.currentValue) {
      this.onDataLoaded();
    }
  }

  ngAfterViewInit() {
    const title = this.getTitle();
    this.onTitleChanged.emit(title);
  }

  move(direction: number) {
    if (direction === 0) {
      return;
    }

    this.direction = direction;
    if (!this.moveOnSelected) {
      const adjacentDate = this.calendarService.getAdjacentCalendarDate(
        this.mode,
        direction
      );
      this.calendarService.setCurrentDate(adjacentDate);
    }
    this.refreshView();
    this.direction = 0;
    this.moveOnSelected = false;
  }

  createDateObject(date: Date): IMonthViewRow {
    let disabled = false;
    if (this.markDisabled) {
      disabled = this.markDisabled(date);
    }

    return {
      date: date,
      events: [],
      label: this.formatDayLabel(date),
      secondary: false,
      disabled: disabled,
    };
  }

  getViewData(startTime: Date): IMonthView {
    const startDate = startTime;
    const date = startDate.getDate();
    const month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
    const dates = MonthViewComponent.getDates(startDate, 42);
    const days: IMonthViewRow[] = [];

    for (let i = 0; i < 42; i++) {
      const dateObject = this.createDateObject(dates[i]);
      dateObject.secondary = dates[i].getMonth() !== month;
      days[i] = dateObject;
    }

    const dayHeaders: string[] = [];
    for (let i = 0; i < 7; i++) {
      dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
    }

    return {
      dates: days,
      dayHeaders: dayHeaders,
    };
  }

  getHighlightClass(date: IMonthViewRow): string {
    let className = '';

    if (date.hasEvent) {
      if (date.secondary) {
        className = 'secondary-with-event';
      } else {
        className = 'primary-with-event';
      }
    }

    if (date.selected) {
      if (className) {
        className += ' ';
      }
      className += 'selected';
    }

    if (date.current) {
      if (className) {
        className += ' ';
      }
      className += 'current';
    }

    if (date.secondary) {
      if (className) {
        className += ' ';
      }
      className +=
        'bg-gray-50 text-slate-500 dark:text-slate-400 dark:bg-gray-700';
    } else {
      if (className) {
        className += ' ';
      }
      className +=
        'bg-white text-slate-700 dark:bg-gray-800 dark:text-slate-300';
    }

    if (date.disabled) {
      if (className) {
        className += ' ';
      }
      className += 'disabled cursor-disabled bg-gray-100 dark:bg-gray-600';
    }

    return className;
  }

  getRange(currentDate: Date): IRange {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const difference = this.startingDayMonth - firstDayOfMonth.getDay();
    const numDisplayedFromPreviousMonth =
      difference > 0 ? 7 - difference : -difference;
    const startDate = new Date(firstDayOfMonth.getTime());

    if (numDisplayedFromPreviousMonth > 0) {
      startDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    const endDate = new Date(startDate.getTime());
    endDate.setDate(endDate.getDate() + 42);

    return {
      startTime: startDate,
      endTime: endDate,
    };
  }

  onDataLoaded() {
    const range = this.range,
      eventSource = this.eventSource,
      len = eventSource ? eventSource.length : 0,
      startTime = range.startTime,
      endTime = range.endTime,
      utcStartTime = new Date(
        Date.UTC(
          startTime.getFullYear(),
          startTime.getMonth(),
          startTime.getDate()
        )
      ),
      utcEndTime = new Date(
        Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())
      ),
      dates = this.view.dates,
      oneDay = 86400000,
      eps = 0.0006;

    for (let r = 0; r < 42; r += 1) {
      if (dates[r].hasEvent) {
        dates[r].hasEvent = false;
        dates[r].events = [];
      }
    }

    for (let i = 0; i < len; i += 1) {
      const event = eventSource[i],
        eventStartTime = new Date(event.startTime.getTime()),
        eventEndTime = new Date(event.endTime.getTime());
      let st: Date, et: Date;

      if (event.allDay) {
        if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
          continue;
        } else {
          st = utcStartTime;
          et = utcEndTime;
        }
      } else {
        if (eventEndTime <= startTime || eventStartTime >= endTime) {
          continue;
        } else {
          st = startTime;
          et = endTime;
        }
      }

      let timeDiff: number;
      let timeDifferenceStart: number;
      if (eventStartTime <= st) {
        timeDifferenceStart = 0;
      } else {
        timeDiff = eventStartTime.getTime() - st.getTime();
        if (!event.allDay) {
          timeDiff =
            timeDiff -
            (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) *
              60000;
        }
        timeDifferenceStart = timeDiff / oneDay;
      }

      let timeDifferenceEnd: number;
      if (eventEndTime >= et) {
        timeDiff = et.getTime() - st.getTime();
        if (!event.allDay) {
          timeDiff =
            timeDiff -
            (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
        }
        timeDifferenceEnd = timeDiff / oneDay;
      } else {
        timeDiff = eventEndTime.getTime() - st.getTime();
        if (!event.allDay) {
          timeDiff =
            timeDiff -
            (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
        }
        timeDifferenceEnd = timeDiff / oneDay;
      }

      let index = Math.floor(timeDifferenceStart);
      while (index < timeDifferenceEnd - eps) {
        dates[index].hasEvent = true;
        let eventSet = dates[index].events;
        if (eventSet) {
          eventSet.push(event);
        } else {
          eventSet = [];
          eventSet.push(event);
          dates[index].events = eventSet;
        }
        index += 1;
      }
    }

    for (let r = 0; r < 42; r += 1) {
      if (dates[r].hasEvent) {
        dates[r].events.sort(this.compareEvent);
      }
    }

    if (this.autoSelect) {
      let findSelected = false;
      for (let r = 0; r < 42; r += 1) {
        if (dates[r].selected) {
          this.selectedDate = dates[r];
          findSelected = true;
          break;
        }
      }

      if (findSelected) {
        this.onTimeSelected.emit({
          selectedTime: this.selectedDate.date,
          events: this.selectedDate.events,
          disabled: this.selectedDate.disabled,
        });
      }
    }
  }

  refreshView() {
    this.range = this.getRange(this.calendarService.currentDate);

    if (this.inited) {
      const title = this.getTitle();
      this.onTitleChanged.emit(title);
    }
    this.view = this.getViewData(this.range.startTime);

    this.updateCurrentView(this.range.startTime);
    this.calendarService.rangeChanged(this);
  }

  getTitle(): string {
    const currentViewStartDate = this.range.startTime;
    const date = currentViewStartDate.getDate();
    const month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
    const year =
      currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0);
    const headerDate = new Date(year, month, 1, 12, 0, 0, 0);

    return this.formatTitle(headerDate);
  }

  private compareEvent(event1: IEvent, event2: IEvent): number {
    if (event1.allDay) {
      return 1;
    } else if (event2.allDay) {
      return -1;
    } else {
      return event1.startTime.getTime() - event2.startTime.getTime();
    }
  }

  select(viewDate: IMonthViewRow) {
    if (!this.view) {
      return;
    }

    const selectedDate = viewDate.date;
    const events = viewDate.events;

    if (!viewDate.disabled) {
      const dates = this.view.dates;
      const currentCalendarDate = this.calendarService.currentDate;
      const currentMonth = currentCalendarDate.getMonth();
      const currentYear = currentCalendarDate.getFullYear();
      const selectedMonth = selectedDate.getMonth();
      const selectedYear = selectedDate.getFullYear();
      let direction = 0;

      if (currentYear === selectedYear) {
        if (currentMonth !== selectedMonth) {
          direction = currentMonth < selectedMonth ? 1 : -1;
        }
      } else {
        direction = currentYear < selectedYear ? 1 : -1;
      }

      this.calendarService.setCurrentDate(selectedDate);
      if (direction === 0) {
        const currentViewStartDate = this.range.startTime;
        const oneDay = 86400000;
        const selectedDayDifference = Math.floor(
          (selectedDate.getTime() -
            currentViewStartDate.getTime() -
            (selectedDate.getTimezoneOffset() -
              currentViewStartDate.getTimezoneOffset()) *
              60000) /
            oneDay
        );

        for (let r = 0; r < 42; r += 1) {
          dates[r].selected = false;
        }

        if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
          dates[selectedDayDifference].selected = true;
          this.selectedDate = dates[selectedDayDifference];
        }
      } else {
        this.moveOnSelected = true;
        this.move(direction);
      }
    }

    this.onTimeSelected.emit({
      selectedTime: selectedDate,
      events: events,
      disabled: viewDate.disabled,
    });
  }

  updateCurrentView(currentViewStartDate: Date) {
    const currentCalendarDate = this.calendarService.currentDate,
      today = new Date(),
      oneDay = 86400000,
      selectedDayDifference = Math.floor(
        (currentCalendarDate.getTime() -
          currentViewStartDate.getTime() -
          (currentCalendarDate.getTimezoneOffset() -
            currentViewStartDate.getTimezoneOffset()) *
            60000) /
          oneDay
      ),
      currentDayDifference = Math.floor(
        (today.getTime() -
          currentViewStartDate.getTime() -
          (today.getTimezoneOffset() -
            currentViewStartDate.getTimezoneOffset()) *
            60000) /
          oneDay
      ),
      view = this.view;

    for (let r = 0; r < 42; r += 1) {
      view.dates[r].selected = false;
    }

    if (
      selectedDayDifference >= 0 &&
      selectedDayDifference < 42 &&
      !view.dates[selectedDayDifference].disabled &&
      (this.autoSelect || this.moveOnSelected)
    ) {
      view.dates[selectedDayDifference].selected = true;
      this.selectedDate = view.dates[selectedDayDifference];
    } else {
      this.selectedDate = {
        date: new Date(),
        events: [],
        label: 'null',
        secondary: false,
        disabled: false,
      };
    }

    if (currentDayDifference >= 0 && currentDayDifference < 42) {
      view.dates[currentDayDifference].current = true;
    }
  }

  eventSelected(event: IEvent) {
    this.onEventSelected.emit(event);
  }
}
