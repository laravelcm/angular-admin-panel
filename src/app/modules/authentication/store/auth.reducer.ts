import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState } from '../interfaces/state.interface';
import { User } from '@app/modules/user/interfaces/user.interface';

export const authState: AuthState = {
  isLoggedIn: false,
  user: null,
  roles: [],
  permissions: [],
  error: null,
  message: null,
  loading: false,
};

export const authFeatureKey = 'auth';

export const authReducer = createReducer(
  authState,
  on(
    AuthActions.authenticateAction,
    AuthActions.forgotPasswordAction,
    AuthActions.resetPasswordAction,
    AuthActions.logoutAction,
    (state: AuthState): AuthState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    AuthActions.fetchAuthenticateSuccessAction,
    (
      state: AuthState,
      {
        user,
        roles,
        permissions,
      }: { user: User | null; roles: string[]; permissions: string[] }
    ): AuthState => {
      return {
        ...state,
        user,
        roles,
        permissions,
        isLoggedIn: user ? true : false,
        loading: false,
        error: null,
        message: null,
      };
    }
  ),
  on(
    AuthActions.fetchCurrentUserSuccessAction,
    (state: AuthState, { user }: { user: User | null }): AuthState => {
      return {
        ...state,
        user,
        loading: false,
        message: null,
        error: null,
      };
    }
  ),
  on(
    AuthActions.fetchAuthenticateFailureAction,
    AuthActions.fetchForgotPasswordFailureAction,
    AuthActions.fetchResetPasswordFailureAction,
    (state: AuthState, { error }: { error: string }): AuthState => {
      return {
        ...state,
        loading: false,
        error,
        message: null,
      };
    }
  ),
  on(
    AuthActions.fetchForgotPasswordSuccessAction,
    (state: AuthState, { message }: { message: string }): AuthState => {
      return {
        ...state,
        loading: false,
        error: null,
        message,
      };
    }
  ),
  on(
    AuthActions.fetchResetPasswordSuccessAction,
    (state: AuthState, { message }: { message: string }): AuthState => {
      return {
        ...state,
        loading: false,
        error: null,
        message,
      };
    }
  ),
  on(AuthActions.fetchLogoutSuccessAction, (state: AuthState): AuthState => {
    return {
      ...state,
      isLoggedIn: false,
      loading: false,
      user: null,
      roles: [],
      permissions: [],
      error: null,
      message: null,
    };
  }),
  on(
    AuthActions.fetchUserRolesAndPermissionsSuccessAction,
    (
      state: AuthState,
      { roles, permissions }: { roles: string[]; permissions: string[] }
    ): AuthState => {
      return {
        ...state,
        permissions,
        roles,
        message: null,
        loading: false,
      };
    }
  )
);
