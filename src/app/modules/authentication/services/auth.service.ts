import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@app/modules/user/interfaces/user.interface';
import { Credentials } from '../interfaces/credentials.interface';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public authenticate(credentials: Credentials): Observable<User> {
    return this.http.post<User>( 
      `${environment.apiUrl}/login`, 
      credentials
    );
  }

  public forgotPassword(email: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/forgot-password`, 
      { email }
    );
  }

  public resetPassword(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/reset-password`, 
      { email, password, confirmPassword }
    );
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/current-user`);
  }

  public logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/logout`, {});
  }
}
