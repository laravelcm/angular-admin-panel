import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { authRoutes } from './routes/authenticate.routes';

import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [],
  providers: [],
})
export class AuthenticationModule { }