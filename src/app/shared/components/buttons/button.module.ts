import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPrimaryComponent } from './primary.component';
import { ButtonLinkComponent } from './link.component';
import { ButtonDefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  ButtonPrimaryComponent,
  ButtonLinkComponent,
  ButtonDefaultComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RouterModule],
  exports: COMPONENTS,
})
export class ButtonModule {}
