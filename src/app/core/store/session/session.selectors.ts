import { createFeatureSelector, createSelector } from '@ngrx/store';

import { sessionFeatureKey, SessionState } from './session.reducer';

export const sessionFeatureSelector =
  createFeatureSelector<SessionState>(sessionFeatureKey);

export const selectFormErrors = createSelector(
  sessionFeatureSelector,
  (state: SessionState) => state.formErrors
);
