import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { PasswordRules } from '@app/shared/rules/password.rule';
import {
  selectError,
  selectLoading,
  selectMessage,
  selectResetPasswordToken,
} from '../../store/auth.selectors';
import { resetPasswordAction } from '../../store/auth.actions';

@Component({
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  public form: FormGroup = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      password_confirmation: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
    },
    { validators: [PasswordRules.match('password', 'password_confirmation')] }
  );

  public error$: Observable<string | null> = this.store.select(selectError);
  public message$: Observable<string | null> = this.store.select(selectMessage);
  public loading$: Observable<boolean> = this.store.select(selectLoading);
  public token$: Observable<string | null> = this.store.select(
    selectResetPasswordToken
  );

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  public submit() {
    if (this.form.valid) {
      this.token$.pipe(map(token => token)).subscribe(value => {
        let credentials = { ...this.form.getRawValue(), token: value };
        this.store.dispatch(resetPasswordAction({ credentials }));
      });
    }
  }
}
