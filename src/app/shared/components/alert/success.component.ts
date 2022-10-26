import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-success',
  template: `
    <div class="p-4 rounded-md bg-green-50" [ngClass]="class">
      <div class="flex">
        <div class="shrink-0">
          <svg
            class="w-5 h-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">{{ message }}</p>
        </div>
      </div>
    </div>
  `,
})
export class SuccessComponent {
  @Input() class!: string;
  @Input() message!: string;
}