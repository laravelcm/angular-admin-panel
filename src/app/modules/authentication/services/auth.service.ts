import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import {
  AuthResponse,
  User,
} from '@app/modules/user/interfaces/user.interface';
import {
  Credentials,
  ResetPasswordCredentials,
} from '../interfaces/credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authenticate(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${environment.apiUrl}/login`,
      credentials
    );
  }

  public forgotPassword(email: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/forgot-password`, { email });
  }

  public resetPassword(credentials: ResetPasswordCredentials): Observable<any> {
    return this.http.post(`${environment.apiUrl}/reset-password`, credentials);
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/me`);
  }

  public getUserRolesPermissions(): Observable<{
    roles: string[];
    permissions: string[];
  }> {
    return this.http.get<{ roles: string[]; permissions: string[] }>(
      `${environment.apiUrl}/user/roles`
    );
  }

  public logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/logout`, {});
  }
}
