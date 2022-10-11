import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { User } from '@app/modules/user/interfaces/user.interface';
import {
  selectCurrentUser,
  selectLoading,
} from '@app/modules/authentication/store/auth.selectors';
import { logoutAction } from '@app/modules/authentication/store/auth.actions';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1, 1)' })),
      state('closed', style({ opacity: 0, transform: 'scale(0.95, 0.95)' })),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen!: boolean;

  currentTheme!: string;

  showDialog: boolean = false;

  themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'System', value: 'system' },
  ];

  @ViewChild('menuDropdown') menuDropdown!: ElementRef;

  @Output() private openMobileSidebar: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public user$: Observable<User | null> = this.store.select(selectCurrentUser);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  public logout() {
    this.store.dispatch(logoutAction());
  }

  get openCloseTrigger() {
    return this.mobileMenuOpen ? 'open' : 'closed';
  }

  toggleMobileMenu(): void {
    this.showDialog = false;
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  openSidebar(): void {
    this.openMobileSidebar.emit(true);
  }

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement: HTMLElement): void {
    const clickedInside =
      this.menuDropdown.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.mobileMenuOpen = false;
    }
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    const selectedTheme = window.localStorage.getItem('theme');

    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme)
    } else {
      const theme = this.themes.find(
        (theme) =>
          theme.value === document.documentElement.getAttribute('data-theme')
      );
      window.localStorage.setItem('theme', theme!.value);
    }

    this.currentTheme = window.localStorage.getItem('theme')!;
  }

  updateTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }
}
