export interface NotificationState {
    notification: Notification | null;
}

export interface Notification {
    title: string | null;
    description: string;
    type: Type;
}

export type Type = 'success' | 'error' | 'info' | 'warning';