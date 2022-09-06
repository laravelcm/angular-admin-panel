import { createAction, props } from '@ngrx/store';
import { Credentials } from '../interfaces/credentials.interface';

import { User } from '@app/modules/user/interfaces/user.interface';

export const authenticateAction = createAction(
  '[Auth] Authenticate', 
  props<{ credentials: Credentials }>()
);

export const fetchAuthenticateSuccessAction = createAction(
  '[Auth] Authenticate Success',
  props<{ user: User }>()
);

export const authenticateFailureAction = createAction(
  '[Auth] Authenticate Failure',
  props<{ error: string }>()
);

export const forgotPasswordAction = createAction(
  '[Auth] Forgot Password',
  props<{ email: string }>()
);

export const forgotPasswordSuccessAction = createAction(
  '[Auth] Forgot Password Success',
  props<{ message: string }>()
);

export const forgotPasswordFailureAction = createAction(
  '[Auth] Forgot Password Failure',
  props<{ error: string }>()
);

export const resetPasswordAction = createAction(
  '[Auth] Reset Password',
  props<{ email: string, password: string, confirmPassword: string }>()
);

export const resetPasswordSuccessAction = createAction(
  '[Auth] Reset Password Success',
  props<{ message: string, user: User }>()
);

export const resetPasswordFailureAction = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: string }>()
);

export const getCurrentUserAction = createAction(
  '[Auth] Get Current User',
);

export const fetchCurrentUserSuccessAction = createAction(
  '[Auth] Get Current User Success',
  props<{ user: User | null }>()
);

export const logoutAction = createAction(
  '[Auth] Logout',
);

export const logoutSuccessAction = createAction(
  '[Auth] Logout Success',
);


