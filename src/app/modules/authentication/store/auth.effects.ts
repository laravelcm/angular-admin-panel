import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../interfaces/credentials.interface';
import { User } from '@app/modules/user/interfaces/user.interface';

@Injectable()
export class AuthEffects {
  authenticateEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.authenticateAction),
      switchMap(({ credentials }: { credentials: Credentials }) => 
        this.authService.authenticate(credentials).pipe(
          map((user: User) => {
            console.log(user);
            this.router.navigateByUrl('/dashboard');
            return AuthActions.fetchAuthenticateSuccessAction({ user });
          }),
          catchError((error) => {
            return of(
              AuthActions.authenticateFailureAction({
                error: error?.message ?? 'Unknown error occurred',
              })
            )
          })
        )
      ),
    )
  );

  forgotPasswordEffect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.forgotPasswordAction),
  ));

  resetPasswordEffect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.resetPasswordAction),
  ));

  getCurrentUserEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.getCurrentUserAction),
      switchMap(() => this.authService.getCurrentUser().pipe(
        map((user: User | null) => AuthActions.fetchCurrentUserSuccessAction({ user })),
        catchError(() => EMPTY)
      ))
  )
  );

  logoutEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.logoutAction),
      switchMap(() => this.authService.logout().pipe(
        map(() => {
          this.router.navigateByUrl('/auth/login');
          return AuthActions.logoutSuccessAction();
        }),
        catchError(() => EMPTY)
      )),
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}