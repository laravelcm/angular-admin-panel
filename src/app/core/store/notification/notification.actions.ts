import { Notification } from "@app/core/interfaces/notification.interface";
import { createAction, props } from "@ngrx/store";

export const getNotificationStatusAction = createAction(
    '[Notification] Get Notification Status',
    props<{ notification: Notification }>()
)

export const resetNotificationStatusAction = createAction(
    '[Notification] Reset Notification Status'
)