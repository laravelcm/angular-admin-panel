import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { authenticateAction } from '../../store/auth.actions';
import {
  selectError,
  selectLoading,
  selectMessage,
} from '../../store/auth.selectors';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public error$: Observable<string | null> = this.store.select(selectError);

  public message$: Observable<string | null> = this.store.select(selectMessage);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private fb: FormBuilder, private store: Store) {}

  public submit() {
    if (this.form.valid) {
      this.store.dispatch(
        authenticateAction({ credentials: this.form.getRawValue() })
      );
    }
  }
}
