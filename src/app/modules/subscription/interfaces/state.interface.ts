import { Plan } from './plan.interfaces';

export interface SubscriptionState {
  plans: Plan[];
  loading: boolean;
  error: string | null;
  message: string | null;
}