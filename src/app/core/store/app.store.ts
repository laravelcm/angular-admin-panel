import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

import { AuthState } from '@app/modules/authentication/interfaces/state.interface';
import { authFeatureKey, authReducer } from '@app/modules/authentication/store/auth.reducer';

export interface AppState {
  router: RouterState;
  [authFeatureKey]: AuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  [authFeatureKey]: authReducer,
};