import { createFeatureSelector, createSelector } from '@ngrx/store';

import { NotificationState } from '@app/core/interfaces/notification.interface';
import { notificationFeatureKey } from './notification.reducer';

export const notificationFeatureSelector =
  createFeatureSelector<NotificationState>(notificationFeatureKey);

export const selectNotification = createSelector(
  notificationFeatureSelector,
  (state: NotificationState) => state.notification
);
