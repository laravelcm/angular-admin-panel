import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { authenticateAction } from '../../store/auth.actions';
import { selectError, selectLoading } from '../../store/auth.selectors';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  public error$: Observable<string | null> = this.store.select(selectError);
  public loading$: Observable<boolean> = this.store.select(selectLoading);
  
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      this.store.dispatch(authenticateAction({ credentials: this.form.getRawValue() }));
    }
  }

}
