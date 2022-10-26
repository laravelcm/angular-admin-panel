import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';
import { ErrorComponent } from './error.component';

const COMPONENTS = [ErrorComponent, SuccessComponent];


@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS]
})
export class NotificationsModule { }
