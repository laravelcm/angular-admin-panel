import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-page-heading',
  template: `
    <div class="py-5 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <div class="sm:flex-auto">
          <h1
            class="text-xl font-bold leading-7 text-slate-900 sm:truncate sm:text-2xl sm:tracking-tight">
            {{ title }}
          </h1>
          <p
            *ngIf="description"
            class="mt-1.5 text-base leading-6 text-slate-500">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class PageHeadingComponent {
  @Input() title!: string;
  @Input() description!: string;
}
