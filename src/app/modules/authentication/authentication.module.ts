import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { authRoutes } from './routes/authenticate.routes';

import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { authReducer, authFeatureKey } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ],
  exports: [],
  providers: [],
})
export class AuthenticationModule { }