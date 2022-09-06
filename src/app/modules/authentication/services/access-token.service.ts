import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {
  constructor() { }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  payload(token: string): any {
    const tokenPayload = token.split('.')[1];
    return JSON.parse(atob(tokenPayload));
  }
}
