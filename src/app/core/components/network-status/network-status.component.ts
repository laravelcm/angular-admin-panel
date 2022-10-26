import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'network-status',
  template: `
    <div
      *ngIf="showNetworkStatus"
      @showHideNotification
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6">
      <div class="flex w-full flex-col items-end space-y-4">
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <!-- Heroicon name: outline/check-circle -->
                <svg
                  class="h-6 w-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-slate-900 capitalize">
                  Online
                </p>
                <p class="mt-1 text-sm text-slate-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="networkStatus === 'online'" class="online">
      <span>{{ networkStatusMessage }}</span>
    </div>

    <div *ngIf="networkStatus === 'offline'" class="offline">
      <span>{{ networkStatusMessage }}</span>
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
export class NetworkStatusComponent implements OnInit {
  @Input() networkStatusMessage!: string;
  @Input() networkStatus!: string;

  showNetworkStatus: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showNetworkStatus = false;
    }, 3000);
  }
}
