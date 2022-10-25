import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  Inject,
  LOCALE_ID,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import {
  CalendarMode,
  IDateFormatter,
  IDayViewAllDayEventSectionTemplateContext,
  IDayViewNormalEventSectionTemplateContext,
  IDisplayAllDayEvent,
  IDisplayEvent,
  IDisplayWeekViewHeader,
  IEvent,
  IMonthViewDisplayEventTemplateContext,
  IMonthViewEventDetailTemplateContext,
  IRange,
  ITimeSelected,
  IWeekViewAllDayEventSectionTemplateContext,
  IWeekViewNormalEventSectionTemplateContext,
  QueryMode,
  Step,
} from '../interfaces';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'tw-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService],
})
export class CalendarComponent implements OnInit, OnDestroy {
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

  @Input() eventSource: IEvent[] = [];
  @Input() calendarMode: CalendarMode = 'month';
  @Input() formatDay = 'd';
  @Input() formatDayHeader = 'EEE';
  @Input() formatDayTitle = 'MMMM dd, yyyy';
  @Input() formatWeekTitle = "MMMM yyyy, 'Week' w";
  @Input() formatMonthTitle = 'MMMM yyyy';
  @Input() formatWeekViewDayHeader = 'EEE d';
  @Input() formatHourColumn = 'ha';
  @Input() showEventDetail = true;
  @Input() startingDayMonth = 0;
  @Input() startingDayWeek = 0;
  @Input() allDayLabel = 'all day';
  @Input() noEventsLabel = 'No Events';
  @Input() queryMode: QueryMode = 'local';
  @Input() step: Step = Step.Hour;
  @Input() timeInterval = 60;
  @Input() autoSelect = true;
  @Input() markDisabled!: (date: Date) => boolean;
  @Input()
  monthViewDisplayEventTemplate!: TemplateRef<IMonthViewDisplayEventTemplateContext>;
  @Input()
  monthViewDisplayResponsiveEventTemplate!: TemplateRef<IMonthViewDisplayEventTemplateContext>;
  @Input()
  monthViewEventDetailTemplate!: TemplateRef<IMonthViewEventDetailTemplateContext>;
  @Input() weekViewHeaderTemplate!: TemplateRef<IDisplayWeekViewHeader>;
  @Input() weekViewAllDayEventTemplate!: TemplateRef<IDisplayAllDayEvent>;
  @Input() weekViewNormalEventTemplate!: TemplateRef<IDisplayEvent>;
  @Input() dayViewAllDayEventTemplate!: TemplateRef<IDisplayAllDayEvent>;
  @Input() dayViewNormalEventTemplate!: TemplateRef<IDisplayEvent>;
  @Input()
  weekViewAllDayEventSectionTemplate!: TemplateRef<IWeekViewAllDayEventSectionTemplateContext>;
  @Input()
  weekViewNormalEventSectionTemplate!: TemplateRef<IWeekViewNormalEventSectionTemplateContext>;
  @Input()
  dayViewAllDayEventSectionTemplate!: TemplateRef<IDayViewAllDayEventSectionTemplateContext>;
  @Input()
  dayViewNormalEventSectionTemplate!: TemplateRef<IDayViewNormalEventSectionTemplateContext>;
  @Input() dateFormatter!: IDateFormatter;
  @Input() locale = '';
  @Input() startHour = 0;
  @Input() endHour = 24;
  @Input() styleClass!: string;
  @Input('monthStyle') monthClass!: string;
  @Input('weekStyle') weekClass!: string;
  @Input('dayStyle') dayClass!: string;

  @Output() onCurrentDateChanged = new EventEmitter<Date>();
  @Output() onRangeChanged = new EventEmitter<IRange>();
  @Output() onEventSelected = new EventEmitter<IEvent>();
  @Output() onTimeSelected = new EventEmitter<ITimeSelected>();
  @Output() onTitleChanged = new EventEmitter<string>();

  private _currentDate!: Date;
  private hourParts = 1;
  private hourSegments = 1;
  private currentDateChangedFromChildrenSubscription!: Subscription | null;

  monthStyle!: string;
  weekStyle!: string;
  dayStyle!: string;

  constructor(
    private calendarService: CalendarService,
    @Inject(LOCALE_ID) private appLocale: string
  ) {
    this.locale = appLocale;
    this.monthStyle = this.monthClass;
    this.weekStyle = this.weekClass;
    this.dayStyle = this.dayClass;
  }

  ngOnInit() {
    if (this.autoSelect) {
      if (this.autoSelect.toString() === 'false') {
        this.autoSelect = false;
      } else {
        this.autoSelect = true;
      }
    }
    this.hourSegments = 60 / this.timeInterval;
    this.hourParts = 60 / this.step;
    if (this.hourParts <= this.hourSegments) {
      this.hourParts = 1;
    } else {
      this.hourParts = this.hourParts / this.hourSegments;
    }
    this.startHour = parseInt(this.startHour.toString(), 10);
    this.endHour = parseInt(this.endHour.toString(), 10);
    this.calendarService.queryMode = this.queryMode;

    this.currentDateChangedFromChildrenSubscription =
      this.calendarService.currentDateChangedFromChildren$.subscribe(
        currentDate => {
          this._currentDate = currentDate;
          this.onCurrentDateChanged.emit(currentDate);
        }
      );
  }

  ngOnDestroy() {
    if (this.currentDateChangedFromChildrenSubscription) {
      this.currentDateChangedFromChildrenSubscription.unsubscribe();
      this.currentDateChangedFromChildrenSubscription = null;
    }
  }

  rangeChanged(range: IRange) {
    this.onRangeChanged.emit(range);
  }

  eventSelected(event: IEvent) {
    this.onEventSelected.emit(event);
  }

  timeSelected(timeSelected: ITimeSelected) {
    this.onTimeSelected.emit(timeSelected);
  }

  titleChanged(title: string) {
    this.onTitleChanged.emit(title);
  }

  loadEvents() {
    this.calendarService.loadEvents();
  }

  next() {
    this.currentDate = this.calendarService.getAdjacentCalendarDate(
      this.calendarMode,
      1
    );
  }

  previous() {
    this.currentDate = this.calendarService.getAdjacentCalendarDate(
      this.calendarMode,
      -1
    );
  }
}
