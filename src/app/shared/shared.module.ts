import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ThemeModule } from './themes/theme.module';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { OverlapingLabelComponent } from './components/inputs/overlaping-label/overlaping-label.component';
import { ButtonPrimaryComponent } from './components/buttons/primary.component';
import { ButtonLinkComponent } from './components/buttons/link.component';
import { ButtonDefaultComponent } from './components/buttons/default.component';
import { ErrorComponent } from './components/alert/error.component';
import { SuccessComponent } from './components/alert/success.component';
import { TextareaSimpleComponent } from './components/textareas/simple/simple.component';
import { PageHeadingWithActionComponent } from './components/headings/page-heading-with-action.component';
import { PageHeadingComponent } from './components/headings/page-heading.component';
import { UserProfileWithNameSkeletonComponent } from './components/skeletons/user-profile-with-name.component';
import { LineSkeletonComponent } from '@app/shared/components/skeletons/line.component';
import { DecreaseBadgeComponent } from './components/snippets/decrease.component';
import { IncreaseBadgeComponent } from './components/snippets/increase.component';

import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusValuePipe } from './pipes/status-value.pipe';

const DECLARATIONS = [
  // Buttons components
  ButtonPrimaryComponent,
  ButtonDefaultComponent,
  ButtonLinkComponent,

  // Headings components
  PageHeadingComponent,
  PageHeadingWithActionComponent,

  // Forms components
  OverlapingLabelComponent,
  TextareaSimpleComponent,

  // Badges
  DecreaseBadgeComponent,
  IncreaseBadgeComponent,

  // Alerts & Notifications Components
  ErrorComponent,
  SuccessComponent,

  // Skeleton Components
  UserProfileWithNameSkeletonComponent,
  LineSkeletonComponent,

  // Directives
  ClickOutsideDirective,

  // Pipes
  StatusColorPipe,
  StatusValuePipe,
];

const MODULES = [
  CommonModule,
  ThemeModule,
  MatFormFieldModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ...MODULES,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  exports: [...DECLARATIONS, ...MODULES, NgxPermissionsModule],
})
export class SharedModule {}
