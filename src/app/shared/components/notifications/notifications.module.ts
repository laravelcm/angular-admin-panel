import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleNotificationComponent } from './simple-notification.component';

const COMPONENTS = [SimpleNotificationComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class NotificationsModule {}
