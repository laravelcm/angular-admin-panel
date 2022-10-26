import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SessionState } from '@app/core/interfaces/session.interface';
import { sessionFeatureKey } from './session.reducer';

export const sessionFeatureSelector =
  createFeatureSelector<SessionState>(sessionFeatureKey);

export const selectFormErrors = createSelector(
  sessionFeatureSelector,
  (state: SessionState) => state.formErrors
);
