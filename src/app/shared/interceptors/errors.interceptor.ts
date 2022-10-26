import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { logoutAction } from '@app/modules/authentication/store/auth.actions';
import { fetchFormsErrorAction } from '@app/core/store/session/session.actions';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if ([403].includes(response.status)) {
          this.store.dispatch(logoutAction());
        }

        if ([422].includes(response.status)) {
          this.store.dispatch(
            fetchFormsErrorAction({ formErrors: response.error })
          );
        }

        const error = response.error.message || response.statusText;
        return of(error);
      })
    );
  }
}
