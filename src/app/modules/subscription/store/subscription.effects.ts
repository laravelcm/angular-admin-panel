import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';

//import { SubscriptionService } from '../services/plan.service';
import * as SubscriptionActions from './subscription.actions';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionEffects {
  constructor(
    private actions$: Actions,
    //private subscriptionService: SubscriptionService, 
    private router: Router
  ) {}

}