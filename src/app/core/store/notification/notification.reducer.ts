import { createReducer, on } from '@ngrx/store';

import {
  Notification,
  NotificationState,
} from '@app/core/interfaces/notification.interface';
import * as NotificationActions from './notification.actions';

export const notificationFeatureKey = 'notification';

export const notificationState: NotificationState = {
  notification: null,
};

export const notificationReducer = createReducer(
  notificationState,
  on(
    NotificationActions.getNotificationStatusAction,
    (
      state: NotificationState,
      { notification }: { notification: Notification }
    ): NotificationState => {
      return {
        ...state,
        notification,
      };
    }
  ),
  on(
    NotificationActions.resetNotificationStatusAction,
    (state: NotificationState): NotificationState => {
      return {
        ...state,
        notification: null,
      };
    }
  )
);
