import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

import { sessionFeatureKey, sessionReducer, SessionState } from './session/session.reducer';

export interface AppState {
  router: RouterState;
  [sessionFeatureKey]: SessionState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  [sessionFeatureKey]: sessionReducer,
};
