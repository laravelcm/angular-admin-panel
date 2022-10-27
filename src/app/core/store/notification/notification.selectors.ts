import { NotificationState } from "@app/core/interfaces/notification.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { notificationFeatureKey } from "./notification.reducer";

export const notificationFeatureSelector = createFeatureSelector<NotificationState>(notificationFeatureKey);

export const selectNotification = createSelector(
    notificationFeatureSelector,
    (state: NotificationState) => state.notification
)