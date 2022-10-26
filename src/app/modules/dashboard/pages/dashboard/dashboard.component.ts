import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(value: boolean) {
    this.isOpen = value
  }

}
