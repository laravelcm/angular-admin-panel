import { createReducer, on } from '@ngrx/store';

import { Plan } from '../interfaces/plan.interfaces';
import { SubscriptionState } from '../interfaces/state.interface';
import * as SubscriptionActions from './subscription.actions';

export const subscriptionState: SubscriptionState = {
  plans: [],
  loading: false,
  error: null,
  message: null,
};

export const subscriptionFeatureKey = 'subscription';

export const subscriptionReducer = createReducer(
  subscriptionState,
  on(
    SubscriptionActions.createPlanAction,
    (state: SubscriptionState): SubscriptionState => {
      return {
        ...state,
        loading: true,
      }
    }
  ),
  on(
    SubscriptionActions.createPlanSuccessAction,
    (state: SubscriptionState, { plans, message }: { plans: Plan[], message: string }): SubscriptionState => {
      return {
        ...state,
        message,
        plans,
        loading: false,
        error: null,
      }
    }
  ),
  on(
    SubscriptionActions.createPlanFailureAction,
    (state: SubscriptionState, { error } : { error: string }): SubscriptionState => {
      return {
        ...state,
        error,
        loading: false,
        message: null,
      }
    }
  )
)