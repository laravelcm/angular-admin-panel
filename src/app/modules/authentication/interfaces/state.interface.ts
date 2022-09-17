import { User } from '@app/modules/user/interfaces/user.interface';
import { DefaultState } from '@app/shared/interfaces/state.interfaces';

export interface AuthState extends DefaultState {
  isLoggedIn: boolean;
  user: User | null;
  roles: string[];
  permissions: string[];
}
