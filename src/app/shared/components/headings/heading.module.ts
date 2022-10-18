import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeadingWithActionComponent } from './page-heading-with-action.component';
import { PageHeadingComponent } from './page-heading.component';

const COMPONENTS = [PageHeadingWithActionComponent, PageHeadingComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class HeadingModule {}
