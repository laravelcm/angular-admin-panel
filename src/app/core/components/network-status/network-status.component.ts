import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

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
                <svg
                  class="h-6 w-6"
                  [ngClass]="{
                    'text-green-400': networkStatus === 'online',
                    'text-red-400': networkStatus === 'offline'
                  }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    *ngIf="networkStatus === 'online'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path
                    *ngIf="networkStatus === 'offline'"
                    d="M15.312 10c1.368.426 2.65 1.12 3.768 2.05m3.5-3.55a16 16 0 0 0-12.383-3.896M8.53 15.61a6 6 0 0 1 6.95 0M12 19.5h.01M1.193 8.7A16.014 16.014 0 0 1 5.76 5.764m-1.027 6.48a10.966 10.966 0 0 1 5-2.51m5.966 6.042A5.974 5.974 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312M3 3l18 18"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div
                *ngIf="networkStatus === 'online'"
                class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-slate-900 capitalize">
                  {{ networkStatus }}
                </p>
                <p class="mt-1 text-sm text-slate-500">
                  {{ networkStatusMessage }}
                </p>
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
        style({ transform: 'translateX(0.5rem)', opacity: 0 }),
        animate(300, style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition('* => void', [animate(100, style({ opacity: 0 }))]),
    ]),
  ],
})
export class NetworkStatusComponent implements OnInit {
  networkStatusMessage!: string;
  networkStatus!: string;
  subscriptions: Subscription[] = [];
  showNetworkStatus!: boolean;

  onlineEvent$!: Observable<Event>;
  offlineEvent$!: Observable<Event>;

  ngOnInit() {
    this.networkStatusChecker();
  }

  toggleNetworkStatus(): void {
    this.showNetworkStatus = true;
    setTimeout(() => {
      this.showNetworkStatus = false;
    }, 5000);
  }

  networkStatusChecker(): void {
    this.onlineEvent$ = fromEvent(window, 'online');
    this.offlineEvent$ = fromEvent(window, 'offline');

    this.subscriptions.push(
      this.onlineEvent$.subscribe(() => {
        this.networkStatus = 'online';
        this.networkStatusMessage = $localize`Vous êtes de nouveau en ligne.`;
        this.toggleNetworkStatus();
      })
    );

    this.subscriptions.push(
      this.offlineEvent$.subscribe(() => {
        this.networkStatus = 'offline';
        this.networkStatusMessage = $localize`Vous n'êtes pas connecté à l'Internet`;
        this.toggleNetworkStatus();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
