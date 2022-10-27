export interface NotificationState {
    notification: Notification | null;
}

export interface Notification {
    title: string | null;
    description: string;
    notificationType: NotificationType;
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning';