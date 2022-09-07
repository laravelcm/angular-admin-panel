import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Plan } from '../interfaces/plan.interfaces';

import { PlanService } from '../services/plan.service';
import * as SubscriptionActions from './subscription.actions';

@Injectable({
  providedIn: 'root'
})
export class PlanEffects {
  constructor(
    private actions$: Actions,
    private planService: PlanService, 
    private router: Router
  ) {}

  createPlanEffect = createEffect(() => this.actions$.pipe(
    ofType(SubscriptionActions.createPlanAction),
    switchMap(({ plan }: { plan: Plan }) =>
      this.planService.createPlan(plan).pipe(
        map(({ plans, message }) => {
          return SubscriptionActions.createPlanSuccessAction({ plans, message })
        }),
        catchError((error) => {
          return of(
            SubscriptionActions.createPlanFailureAction({
              error: error?.message ?? 'Une erreur est survenue'
            })
          )
        })
      )
    )
  )
    
  )

  createPlanSuccessEffect() {}

  createPlanFailureEffect() {}

}