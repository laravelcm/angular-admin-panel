import { User } from '@app/modules/user/interfaces/user.interface';

export interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  error: string | null;
  message: string | null;
}