import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { User } from '@app/modules/user/interfaces/user.interface';
import { selectCurrentUser, selectLoading } from '@app/modules/authentication/store/auth.selectors';
import { logoutAction } from '@app/modules/authentication/store/auth.actions';

@Component({
  selector: 'cosna-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)'
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)'
        })
      ),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')])
    ])
  ]
})
export class HeaderComponent {

  mobileMenuOpen!: boolean;

  @ViewChild('menuDropdown') menuDropdown!: ElementRef;

  public user$: Observable<User | null> = this.store.select(selectCurrentUser);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  public logout() {
    this.store.dispatch(logoutAction());
  }

  get openCloseTrigger() {
    return this.mobileMenuOpen ? 'open' : 'closed';
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement: HTMLElement): void {
    const clickedInside = this.menuDropdown.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.mobileMenuOpen = false;
    }
  }

  constructor(private store: Store) { }

}
