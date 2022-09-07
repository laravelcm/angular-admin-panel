import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Credentials, ResetPasswordCredentials } from '../interfaces/credentials.interface';
import { AuthResponse } from '@app/modules/user/interfaces/user.interface';
import { AccessTokenService } from '../services/access-token.service';

@Injectable()
export class AuthEffects {
  authenticateEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.authenticateAction),
      switchMap(({ credentials }: { credentials: Credentials }) => 
        this.authService.authenticate(credentials).pipe(
          map((authResponse: AuthResponse) => {
            this.accessTokenService.setAccessToken(authResponse.data.access_token, authResponse.data.expires_in);
            this.router.navigateByUrl('/dashboard');
            return AuthActions.fetchAuthenticateSuccessAction({ user: authResponse.data.user });
          }),
          catchError((error) => {
            return of(
              AuthActions.authenticateFailureAction({
                error: error.error?.message ?? 'Une erreur est survenue',
              })
            )
          })
        )
      ),
    )
  );

  forgotPasswordEffect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.forgotPasswordAction),
    switchMap(({ email }: { email: string }) => 
      this.authService.forgotPassword(email).pipe(
        map(({ message }: { message: string }) => AuthActions.forgotPasswordSuccessAction({ message })),
        catchError((error) => {
          return of(
            AuthActions.forgotPasswordFailureAction({
              error: error.error?.message ?? 'Une erreur est survenue',
            })
          )
        })
      )
    )
  ));

  resetPasswordEffect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.resetPasswordAction),
    switchMap(({ credentials }: { credentials: ResetPasswordCredentials }) =>
      this.authService.resetPassword(credentials).pipe(
        map(({ message }: { message: string }) => AuthActions.resetPasswordSuccessAction({ message })),
        catchError((error) => {
          return of(
            AuthActions.resetPasswordFailureAction({
              error: error.error?.message ?? 'Une erreur est survenue',
            })
          )
        }
      ))
    )
  ));

  getCurrentUserEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.getCurrentUserAction),
      switchMap(() => this.authService.getCurrentUser().pipe(
        map(({ data }: any) => AuthActions.fetchCurrentUserSuccessAction({ user: data.user })),
        catchError(() => EMPTY)
      ))
  )
  );

  logoutEffect = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.logoutAction),
      switchMap(() => this.authService.logout().pipe(
        map(() => {
          this.accessTokenService.removeAccessToken();
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
    private accessTokenService: AccessTokenService,
    private router: Router
  ) {}
}