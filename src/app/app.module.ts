import {
  APP_INITIALIZER,
  ErrorHandler,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';

import { environment } from 'environments/environment';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { ROOT_REDUCERS } from './core/store/app.store';
import { AuthInterceptor } from './modules/authentication/interceptors/auth.interceptor';
import { HttpLoadingInterceptor } from './shared/interceptors/http-loading.interceptor';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ErrorsInterceptor } from './shared/interceptors/errors.interceptor';
import { AppComponent } from './core/components/app/app.component';
import { NetworkStatusComponent } from './core/components/network-status/network-status.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, NetworkStatusComponent],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot(),
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
