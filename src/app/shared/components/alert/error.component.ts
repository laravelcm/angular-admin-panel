import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alert-errors',
  template: `
    <div *ngIf="showAlert" aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">

        <div @showHideNotification class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-red-50 shadow-lg ring-1 ring-black ring-opacity-5" [ngClass]="class">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
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
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <h3 class="text-sm font-medium text-red-800">{{ message }}</h3>
                <div *ngIf="errors.length" class="mt-2 text-sm text-red-700">
                  <ul role="list" class="pl-5 space-y-1 list-disc">
                    <li *ngFor="let error of errors">{{ error }}</li>
                  </ul>
                </div>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button (click)="toggle()" type="button" class="inline-flex rounded-md bg-red-50 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
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

  @Input('isOpen') showAlert!: boolean;

  @Input() message!: string;

  @Output() toggleShowAlert: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle(){
    setTimeout(() => {
      this.toggleShowAlert.emit(false);
    }, 100);
  }
  @Input() errors: string[] = [];
}
