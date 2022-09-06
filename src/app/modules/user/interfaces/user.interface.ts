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