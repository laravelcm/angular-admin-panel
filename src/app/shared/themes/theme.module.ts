import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { SkeletonModule } from '../components/skeletons/skeleton.module';

import { AuthComponent } from './layouts/auth/auth.component';
import { CpanelComponent } from './layouts/cpanel/cpanel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const MODULES = [
  CommonModule,
  RouterModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatRippleModule,
  SkeletonModule,
];

@NgModule({
  declarations: [
    AuthComponent,
    CpanelComponent,
    SidebarComponent,
    LogoComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    ...MODULES,
    NgxPermissionsModule.forChild({
      rolesIsolate: true,
    }),
  ],
  exports: [LogoComponent, ...MODULES],
})
export class ThemeModule {}
