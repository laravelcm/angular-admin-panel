import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-errors',
  template: `
    <div class="p-4 rounded-md bg-red-50" [ngClass]="class">
      <div class="flex">
        <div class="shrink-0">
          <svg
            class="w-5 h-5 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 *ngIf="message" class="text-sm font-medium text-red-800">
            {{ message }}
          </h3>
          <div *ngIf="errors.length" class="mt-2 text-sm text-red-700">
            <ul role="list" class="pl-5 space-y-1 list-disc">
              <li *ngFor="let error of errors">{{ error }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ErrorComponent {
  @Input() class!: string;
  @Input() message!: string;
  @Input() errors: string[] = [];
}