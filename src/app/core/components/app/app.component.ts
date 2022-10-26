import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'admin-root',
  template: `
    <router-outlet></router-outlet>
    <network-status
      [networkStatus]="connectionStatus"
      [networkStatusMessage]="connectionStatusMessage"></network-status>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  onlineEvent!: Observable<Event>;
  offlineEvent!: Observable<Event>;
  subscriptions: Subscription[] = [];

  connectionStatusMessage!: string;
  connectionStatus!: string;

  ngOnInit(): void {
    this.networkStatus();
    document.documentElement.setAttribute('data-theme', this.updateTheme());

    new MutationObserver(([{ oldValue }]) => {
      let newValue = document.documentElement.getAttribute('data-theme')!;
      if (newValue !== oldValue) {
        try {
          window.localStorage.setItem('theme', newValue);
        } catch {}
        this.updateThemeWithoutTransitions(newValue);
      }
    }).observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributeOldValue: true,
    });
  }

  networkStatus(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(
      this.onlineEvent.subscribe(() => {
        this.connectionStatus = 'online';
        this.connectionStatusMessage = $localize`Vous êtes de nouveau en ligne.`;
      })
    );

    this.subscriptions.push(
      this.offlineEvent.subscribe(() => {
        this.connectionStatus = 'offline';
        this.connectionStatusMessage = $localize`Connexion perdue ! Vous n'êtes pas connecté à l'Internet`;
      })
    );
  }

  updateTheme(savedTheme: string | null = null): string {
    let theme = 'system';
    try {
      if (!savedTheme) {
        savedTheme = window.localStorage.getItem('theme');
      }
      if (savedTheme === 'dark') {
        theme = 'dark';
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        theme = 'light';
        document.documentElement.classList.remove('dark');
      } else if (this.mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      theme = 'light';
      document.documentElement.classList.remove('dark');
    }
    return theme;
  }

  updateThemeWithoutTransitions(savedTheme: string | null = null): void {
    this.updateTheme(savedTheme);
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
