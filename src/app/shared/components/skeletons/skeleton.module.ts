import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackdropLoaderComponent } from './backdrop-loader.component';
import { SkeletonComponent } from './skeleton.component';

const COMPONENTS = [BackdropLoaderComponent, SkeletonComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class SkeletonModule {}
