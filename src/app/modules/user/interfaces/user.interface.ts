export interface AuthResponse {
  message: string;
  data: {
    user: User;
    access_token: string;
    token_type: string;
    expires_at: FromDate;
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
  timezone: string;
  emailVerifiedAt: string;
  roles: string[];
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}