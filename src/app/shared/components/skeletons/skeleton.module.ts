import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackdropLoaderComponent } from './backdrop-loader.component';

const COMPONENTS = [BackdropLoaderComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class SkeletonModule {}
