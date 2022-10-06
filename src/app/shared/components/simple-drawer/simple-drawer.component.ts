import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'simple-drawer',
  templateUrl: './simple-drawer.component.html',
})
export class SimpleDrawerComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  @Input() title!: string;

  @Input() class!: string;

  @Input() value?: any;

  @Output() dispatchOnLoad: EventEmitter<any> = new EventEmitter<any>();

  opened: boolean = false;

  public open() {
    this.sidenav.open();

    if (this.value) {
      this.dispatchOnLoad.emit(this.value);
    }
  }
}
