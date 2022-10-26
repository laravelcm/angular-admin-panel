import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecreaseBadgeComponent } from './decrease.component';
import { IncreaseBadgeComponent } from './increase.component';

const COMPONENTS = [DecreaseBadgeComponent, IncreaseBadgeComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class SnippetModule {}
