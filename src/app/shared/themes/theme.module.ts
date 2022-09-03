import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';
import { CpanelComponent } from './layouts/cpanel/cpanel.component';

@NgModule({
  declarations: [AuthComponent, CpanelComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, CommonModule],
})
export class ThemeModule { }
