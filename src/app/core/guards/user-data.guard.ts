import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, map, Observable } from 'rxjs';

import { selectCurrentUser } from '@app/modules/authentication/store/auth.selectors';
import { getCurrentUserAction } from '@app/modules/authentication/store/auth.actions';
import { User } from '@app/modules/user/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserDataGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      first(),
      map((user: User | null) => {
        if (!user) {
          this.store.dispatch(getCurrentUserAction());
        }
        return true;
      })
    );
  }
}
