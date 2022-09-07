import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SubscriptionState } from '../interfaces/state.interface';
import { subscriptionFeatureKey } from './subscription.reducer';

export const subscriptionFeatureSelector = createFeatureSelector<SubscriptionState>(subscriptionFeatureKey);

export const selectPlans = createSelector(
  subscriptionFeatureSelector,
  (state: SubscriptionState) => state.plans
);

export const selectLoading = createSelector(
  subscriptionFeatureSelector,
  (state: SubscriptionState) => state.loading
);

export const selectError = createSelector(
  subscriptionFeatureSelector,
  (state: SubscriptionState) => state.error
);

export const selectMessage = createSelector(
  subscriptionFeatureSelector,
  (state: SubscriptionState) => state.message
);