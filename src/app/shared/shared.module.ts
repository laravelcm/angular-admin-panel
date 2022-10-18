import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ThemeModule } from './themes/theme.module';
import { InputsModule } from './components/inputs/inputs.module';
import { AlertModule } from './components/alert/alert.module';
import { ButtonModule } from './components/buttons/button.module';
import { HeadingModule } from './components/headings/heading.module';
import { SkeletonModule } from './components/skeletons/skeleton.module';
import { SnippetModule } from './components/snippets/snippet.module';
import { TextareaModule } from './components/textarea/textarea.module';
import { CalendarModule } from './components/calendar/calendar.module';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusValuePipe } from './pipes/status-value.pipe';

const DECLARATIONS = [ClickOutsideDirective, StatusColorPipe, StatusValuePipe];
const MODULES = [
  AlertModule,
  ButtonModule,
  CalendarModule,
  HeadingModule,
  InputsModule,
  SkeletonModule,
  SnippetModule,
  TextareaModule,
  ThemeModule,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [...MODULES],
  exports: [...DECLARATIONS, ...MODULES, NgxPermissionsModule],
})
export class SharedModule {}
