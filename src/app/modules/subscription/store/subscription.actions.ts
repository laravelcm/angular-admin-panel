import { createAction, props } from '@ngrx/store';

import { Plan } from '../interfaces/plan.interfaces';

export const createPlanAction = createAction(
  '[Subscription] Create plan',
  props<{ plan: Plan }>()
);

export const createPlanSuccessAction = createAction(
  '[Subscription] Create plan success',
  props<{ plans: Plan[], message: string }>()
);

export const createPlanFailureAction = createAction(
  '[Subscription] Create plan failure',
  props<{ error: string }>()
);

export const updatePlanAction = createAction(
  '[Subscription] Update plan',
  props<{ plan: Plan }>()
);