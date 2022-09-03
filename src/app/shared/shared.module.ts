import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from './themes/theme.module';

import { LogoComponent } from './components/logo/logo.component';
import { OverlapingLabelComponent } from './components/inputs/overlaping-label/overlaping-label.component';
import { PrimaryComponent as ButtonPrimary } from './components/buttons/primary/primary.component';

@NgModule({
  declarations: [
    LogoComponent,
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
    LogoComponent,
    OverlapingLabelComponent,
    ButtonPrimary,
  ],
})
export class SharedModule { }
