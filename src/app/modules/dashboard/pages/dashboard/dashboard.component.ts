import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  isOpen: boolean = false;

  constructor(private title: Title) { }

  ngOnInit(): void {
  }

  toggle(value: boolean) {
    this.isOpen = value
  }
}
