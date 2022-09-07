import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from './themes/theme.module';

import { OverlapingLabelComponent } from './components/inputs/overlaping-label/overlaping-label.component';
import { PrimaryComponent as ButtonPrimary } from './components/buttons/primary/primary.component';
import { ErrorComponent } from './components/alert/error/error.component';
import { SuccessComponent } from './components/alert/success/success.component';


const MODULES = [CommonModule, ThemeModule];
const DECLARATIONS = [
  ButtonPrimary,
  OverlapingLabelComponent,
  ErrorComponent,
  SuccessComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ],
  exports: [ 
    ...DECLARATIONS,
    ...MODULES
  ],
})
export class SharedModule { }
