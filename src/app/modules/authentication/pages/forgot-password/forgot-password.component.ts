import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { forgotPasswordAction } from '../../store/auth.actions';
import { selectError, selectLoading, selectMessage } from '../../store/auth.selectors';

@Component({
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });
  
  public error$: Observable<string | null> = this.store.select(selectError);

  public message$: Observable<string | null> = this.store.select(selectMessage);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      this.store.dispatch(forgotPasswordAction(this.form.getRawValue()));

      this.form.reset();
    }
  }

}
