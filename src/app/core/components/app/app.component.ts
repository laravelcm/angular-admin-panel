import { Component, OnInit } from '@angular/core';
import { Notification } from '@app/core/interfaces/notification.interface';
import { resetNotificationStatusAction } from '@app/core/store/notification/notification.actions';
import { selectNotification } from '@app/core/store/notification/notification.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-root',
  template: `
    <router-outlet></router-outlet>
    <network-status></network-status>
    <simple-notification (toggleShowNotification)="close($event)" [isOpen]="isOpen" [title]="notification?.title" [message]="notification?.description"><simple-notification>
  `,
})
export class AppComponent implements OnInit {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  notification!: Notification;
  isOpen!: boolean;
  notification$: Observable<Notification | null> = this.store.select(selectNotification);

  constructor(private store: Store) {}

  ngOnInit(): void {

    this.notification$.subscribe(data => {
      if (data) {
        this.notification = data;
        this.isOpen = true;
        setTimeout(() => {
          this.isOpen = false;
        }, 3000)
      }
    })

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

  close(value: boolean) {
    resetNotificationStatusAction();
    this.isOpen = false;
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
}
