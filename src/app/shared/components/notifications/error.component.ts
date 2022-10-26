import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'notification-error',
  template: `
    <div *ngIf="showNotification" aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">

        <div @showHideNotification class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" [ngClass]="class">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">

                <svg class="h-6 w-6 text-red-700"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-red-700">{{ message }}</p>
                <p class="mt-1 text-sm text-red-500">{{ description }}</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button (click)="toggle()" type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  animations: [
    trigger('showHideNotification', [
      transition('void => *', [
        style({ transform: "translateX(0.5rem)", opacity: 0 }),
        animate(300, style({ transform: "translateX(0)", opacity: 1 }))
      ]),
      transition('* => void', [
        animate(100, style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class ErrorComponent {
  @Input() class!: string;

  @Input('isOpen') showNotification!: boolean;

  @Output() toggleShowNotification: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() message!: string;
  
  @Input() description!: string;

  toggle(){
    setTimeout(() => {
      this.toggleShowNotification.emit(false);
    }, 100);
  }
}
