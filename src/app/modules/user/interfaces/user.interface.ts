import { AppHttpResponse } from '@app/shared/interfaces/response.interface';

export interface AuthResponse extends AppHttpResponse {
  data: {
    user: User;
    access_token: string;
    token_type: string;
    expires_at: FromDate;
    expires_in: number;
  }
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
  roles: string[];
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}