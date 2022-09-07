import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AccessTokenService } from '@app/modules/authentication/services/access-token.service';
import { selectIsLoggedIn } from '@app/modules/authentication/store/auth.selectors';
import { Store } from '@ngrx/store';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivateChild {
  constructor(
    private store: Store,
    private router: Router,
    private accessTokenService: AccessTokenService
  ) {}

  canActivateChild(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      first((value) => value !== null),
      map(() => {
        if (! this.accessTokenService.tokenExpired()) {
          this.router.navigateByUrl('/dashboard')
          return false
        }

        return true;
      })
    );
  }

} 