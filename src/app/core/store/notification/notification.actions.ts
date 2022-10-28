import { createAction, props } from '@ngrx/store';

import { Notification } from '@app/core/interfaces/notification.interface';

export const getNotificationStatusAction = createAction(
  '[Notification] Get Notification',
  props<{ notification: Notification }>()
);

export const resetNotificationStatusAction = createAction(
  '[Notification] Reset Notification'
);
