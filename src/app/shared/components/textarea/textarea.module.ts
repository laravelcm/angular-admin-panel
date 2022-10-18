import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaSimpleComponent } from './simple/simple.component';

const COMPONENTS = [TextareaSimpleComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class TextareaModule {}
