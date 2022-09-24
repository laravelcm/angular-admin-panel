import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-page-heading-with-action',
  template: `
    <div class="py-5 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {{ title }}
        </h2>
      </div>
      <div class="flex mt-4 md:mt-0 md:ml-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PageHeadingWithActionComponent {
  @Input() title!: string;
}
