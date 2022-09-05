import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';
import { CpanelComponent } from './layouts/cpanel/cpanel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';

const MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [
    AuthComponent,
    CpanelComponent,
    SidebarComponent,
    LogoComponent,
  ],
  imports: MODULES,
  exports: [
    LogoComponent,
    ...MODULES,
  ],
})
export class ThemeModule { }
