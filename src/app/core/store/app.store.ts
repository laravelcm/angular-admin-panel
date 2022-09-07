import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

import { AuthState } from '@app/modules/authentication/interfaces/state.interface';
import { authFeatureKey, authReducer } from '@app/modules/authentication/store/auth.reducer';
import { subscriptionFeatureKey, subscriptionReducer } from '@app/modules/subscription/store/subscription.reducer';
import { SubscriptionState } from '@app/modules/subscription/interfaces/state.interface';

export interface AppState {
  router: RouterState;
  [authFeatureKey]: AuthState;
  [subscriptionFeatureKey]: SubscriptionState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  [authFeatureKey]: authReducer,
  [subscriptionFeatureKey]: subscriptionReducer,
};