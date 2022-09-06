export interface AuthResponse {
  user: User;
  access_token: string;
  token_type: string;
  expires_at: Date;
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