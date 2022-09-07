import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState } from '../interfaces/state.interface';
import { User } from '@app/modules/user/interfaces/user.interface';

export const authState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  user: null,
  error: null,
  message: null,
};

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  authState,
  on(
    AuthActions.authenticateAction, 
    AuthActions.forgotPasswordAction,
    AuthActions.resetPasswordAction,
    (state: AuthState): AuthState => {
      return {
        ...state,
        isLoading: true,
      }
    }
  ),
  on(
    AuthActions.fetchAuthenticateSuccessAction,
    AuthActions.fetchCurrentUserSuccessAction,
    (state: AuthState, { user }: { user: User | null }): AuthState => {
      return {
        ...state,
        user,
        isLoggedIn: user ? true : false,
        isLoading: false,
        error: null,
      }
    }
  ),
  on(
    AuthActions.authenticateFailureAction,
    AuthActions.forgotPasswordFailureAction,
    AuthActions.resetPasswordFailureAction,
    (state: AuthState, { error }: { error: string }): AuthState => {
      return {
        ...state,
        isLoading: false,
        error,
      }
    }
  ),
  on(
    AuthActions.forgotPasswordSuccessAction,
    (state: AuthState, { message }: { message: string }): AuthState => {
      return {
        ...state,
        isLoading: false,
        error: null,
        message,
      }
    }
  ),
  on(
    AuthActions.resetPasswordSuccessAction,
    (state: AuthState, { message }: { message: string }): AuthState => {
      return {
        ...state,
        isLoading: false,
        error: null,
        message,
      }
    }
  ),
  on(AuthActions.logoutSuccessAction, (state: AuthState): AuthState => {
    return {
      ...state,
      isLoggedIn: false,
      isLoading: false,
      user: null,
      error: null,
      message: null,
    };
  })
);  