export interface NotificationState {
  notification: Notification | null;
}

export interface Notification {
  title?: string;
  message: string;
  type: Type;
  duration?: number;
}

export type Type = 'success' | 'error' | 'info' | 'warning';
