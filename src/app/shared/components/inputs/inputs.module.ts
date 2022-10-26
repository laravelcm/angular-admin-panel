import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverlapingLabelComponent } from './overlaping-label/overlaping-label.component';

const COMPONENTS = [OverlapingLabelComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: COMPONENTS,
})
export class InputsModule {}
