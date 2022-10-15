import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private title: Title) {}
}
