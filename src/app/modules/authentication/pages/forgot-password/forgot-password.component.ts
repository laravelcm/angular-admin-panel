import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { forgotPasswordAction } from '../../store/auth.actions';
import {
  selectError,
  selectLoading,
  selectMessage,
} from '../../store/auth.selectors';

@Component({
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public error$: Observable<string | null> = this.store.select(selectError);

  public message$: Observable<string | null> = this.store.select(selectMessage);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle($localize`Mot de passe oublié | Admin CPanel`);
    this.meta.updateTag({
      property: 'og:url',
      content: environment.baseUrl + '/forgot-password',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: $localize`Mot de passe oublié | Admin CPanel`,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: $localize`Réinitialisez votre mot de passe`,
    });
  }

  public submit() {
    if (this.form.valid) {
      this.store.dispatch(forgotPasswordAction(this.form.getRawValue()));

      this.form.reset();
    }
  }
}
