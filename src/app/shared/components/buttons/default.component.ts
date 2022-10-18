import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'button-default',
  template: `
    <button
      [type]="type"
      [disabled]="loading$ | async"
      [ngClass]="class"
      class="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-slate-300 dark:hover:text-white dark:focus:ring-offset-gray-800">
      <span *ngIf="loading$ | async">
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-slate-500 dark:text-slate-400 animate-spin"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </span>
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonDefaultComponent {
  @Input() type: string = 'button';
  @Input() loading$!: Observable<boolean>;
  @Input() class!: string;
}
