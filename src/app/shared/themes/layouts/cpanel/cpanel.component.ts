import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'cpanel-layout',
  templateUrl: './cpanel.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0%)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('open => closed', [animate('300ms ease-in-out')]),
      transition('closed => open', [animate('300ms ease-in-out')]),
    ]),
    trigger('openBackdrop', [
      state('open', style({ opacity: 1, transitionProperty: 'opacity' })),
      state('closed', style({ opacity: 0, transitionProperty: 'opacity' })),
      transition('open => closed', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)'),
      ]),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)'),
      ]),
    ]),
    trigger('closeButton', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0 })),
      transition('open => closed', [animate('300ms ease-in-out')]),
      transition('closed => open', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class CpanelComponent implements OnInit {
  loading!: boolean;
  mobileSidebarOpen!: boolean;

  toggleSidebar(): void {
    this.mobileSidebarOpen = !this.mobileSidebarOpen;
  }

  openSidebar($event: boolean): void {
    this.mobileSidebarOpen = $event;
  }

  get openCloseTrigger() {
    return this.mobileSidebarOpen ? 'open' : 'closed';
  }

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe(
      loading => (this.loading = loading)
    );
  }
}
