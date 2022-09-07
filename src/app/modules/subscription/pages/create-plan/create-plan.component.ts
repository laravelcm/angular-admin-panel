import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createPlanAction } from '../../store/subscription.actions';
import { selectError, selectLoading, selectMessage } from '../../store/subscription.selectors';

@Component({
  templateUrl: './create-plan.component.html',
})
export class CreatePlanComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    price: [''],
  })

  public error$: Observable<string | null> = this.store.select(selectError);

  public loading$: Observable<boolean> = this.store.select(selectLoading);

  public message$: Observable<string | null> = this.store.select(selectMessage);

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void { }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(createPlanAction(this.form.getRawValue()))
    }
  }

}
