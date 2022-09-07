export interface Credentials {
  email: string;
  password: string;
}

export interface ResetPasswordCredentials {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}