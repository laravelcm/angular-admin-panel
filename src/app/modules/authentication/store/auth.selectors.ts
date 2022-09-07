import { Params } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectQueryParams } from '@app/core/store/router.selectors';
import { AuthState } from '../interfaces/state.interface';
import { authFeatureKey } from './auth.reducer';

const authSelectorFeature = createFeatureSelector<AuthState>(authFeatureKey);

export const selectCurrentUser = createSelector(
  authSelectorFeature,
  (state: AuthState) => state.user
);

export const selectError = createSelector(
  authSelectorFeature,
  (state: AuthState) => state.error
);

export const selectIsLoggedIn = createSelector(
  authSelectorFeature,
  (state: AuthState) => state.isLoggedIn
);

export const selectMessage = createSelector(
  authSelectorFeature,
  (state: AuthState) => state.message
);

export const selectLoading = createSelector(
  authSelectorFeature,
  (state: AuthState) => state.isLoading
);

export const selectResetPasswordToken = createSelector(
  selectQueryParams,
  (params: Params) => params['token']
);