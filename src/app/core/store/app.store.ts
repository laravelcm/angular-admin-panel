import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

import { NotificationState } from '../interfaces/notification.interface';
import { SessionState } from '../interfaces/session.interface';
import {
  notificationFeatureKey,
  notificationReducer,
} from './notification/notification.reducer';
import { sessionFeatureKey, sessionReducer } from './session/session.reducer';

export interface AppState {
  router: RouterState;
  [sessionFeatureKey]: SessionState;
  [notificationFeatureKey]: NotificationState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  [sessionFeatureKey]: sessionReducer,
  [notificationFeatureKey]: notificationReducer,
};
