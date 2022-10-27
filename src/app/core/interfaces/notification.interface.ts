export interface NotificationState {
    notification: Notification | null;
}

export interface Notification {
    title: string | null;
    message: string;
    type: Type;
}

export type Type = 'success' | 'error' | 'info' | 'warning';