import { Component, Input } from '@angular/core';

@Component({
  selector: 'increase-badge',
  template: `
    <div
      class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
      <svg
        class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
          clip-rule="evenodd" />
      </svg>
      <span class="sr-only"> Increased by </span>
      {{ value }}
    </div>
  `,
})
export class IncreaseBadgeComponent {
  @Input() value!: number | string;
}
