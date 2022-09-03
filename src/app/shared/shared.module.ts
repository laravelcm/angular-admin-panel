import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from './themes/theme.module';

import { OverlapingLabelComponent } from './components/inputs/overlaping-label/overlaping-label.component';
import { PrimaryComponent as ButtonPrimary } from './components/buttons/primary/primary.component';

@NgModule({
  declarations: [
    OverlapingLabelComponent,
    ButtonPrimary,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule, 
    ThemeModule, 
    OverlapingLabelComponent,
    ButtonPrimary,
  ],
})
export class SharedModule { }
