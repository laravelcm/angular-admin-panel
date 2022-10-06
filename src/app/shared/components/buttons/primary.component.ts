import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'button-primary',
  template: `
    <button
      [type]="type"
      [disabled]="loading$ | async"
      class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150"
      [ngClass]="class + this.themeClass()"
      matRipple
      matRippleColor="primary">
      <span *ngIf="loading$ | async">
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
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
export class ButtonPrimaryComponent {
  @Input() type: string = 'button';

  @Input() loading$!: Observable<boolean>;

  @Input() class!: string;

  @Input() theme: string = 'primary';

  public themeClass(theme: string): string {
    switch (theme) {
      case 'primary':
        return 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500';
      case 'secondary':
        return 'bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
      default:
        return 'bg-transparent hover:bg-slate-50 focus:ring-slate-900';
    }
  }
}