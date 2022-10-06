import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'backdrop-loader',
  template: `
    <div
      *ngIf="loading$ | async"
      class="absolute inset-0 z-50 flex items-center justify-center rounded-lg backdrop-blur-sm bg-white/30">
      <span>
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-primary-500 animate-spin"
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
    </div>
  `,
})
export class BackdropLoaderComponent {
  @Input() loading$!: Observable<boolean>;
}
