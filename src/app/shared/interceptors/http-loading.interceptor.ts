import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

import { environment } from 'environments/environment';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { LoadingService } from '../themes/services/loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  private httpRequestCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private localStorageService: LocalStorageService,
    public loadingService: LoadingService
  ) {
    this.httpRequestCount$.subscribe((i: number) => {
      i === 0
        ? setTimeout(() => {
            this.loadingService.isLoading$.next(false);
          })
        : setTimeout(() => {
            this.loadingService.isLoading$.next(true);
          });
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const accessToken = this.localStorageService.getAccessToken();

    if (accessToken && isApiUrl) {
      this.httpRequestCount$.next(this.httpRequestCount$.value + 1);
      return next.handle(request).pipe(
        tap((httpEvent: HttpEvent<unknown>) => {
          if (httpEvent instanceof HttpResponse) {
            this.httpRequestCount$.next(this.httpRequestCount$.value - 1);
          }
        }),
        catchError(error => {
          this.httpRequestCount$.next(this.httpRequestCount$.value - 1);
          return of(error);
        })
      );
    }

    return next.handle(request);
  }
}
