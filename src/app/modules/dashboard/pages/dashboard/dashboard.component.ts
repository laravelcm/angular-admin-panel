import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  isOpen: boolean = false;

  toggle(value: boolean) {
    this.isOpen = value;
  }
}
