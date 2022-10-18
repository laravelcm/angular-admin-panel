import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error.component';
import { SuccessComponent } from './success.component';

const COMPONENTS = [ErrorComponent, SuccessComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class AlertModule {}
