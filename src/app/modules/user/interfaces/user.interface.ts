import { Pagination } from '@app/shared/interfaces/response.interface';
import { DefaultState } from '@app/shared/interfaces/state.interfaces';

export interface UserState extends DefaultState {
  pagination: Pagination;
}

export interface AuthResponse {
  message: string;
  data: {
    user: User;
    access_token: string;
    token_type: string;
    expires_at: FromDate;
    expires_in: number;
    roles: string[];
    permissions: string[];
  };
}

export interface FromDate {
  date: Date;
  timezone_type: number;
  timezone: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  accountType: string;
  profilePhotoUrl: string;
  timezone: string;
  emailVerifiedAt: string;
  createdAt: Date;
  updatedAt: Date;
}
