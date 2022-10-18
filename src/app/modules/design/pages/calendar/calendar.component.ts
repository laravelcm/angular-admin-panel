import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  public calendar!: any;
  constructor() {}

  ngOnInit(): void {
    this.calendar = {
      mode: 'month',
      currentDate: new Date(),
    };
  }
}
