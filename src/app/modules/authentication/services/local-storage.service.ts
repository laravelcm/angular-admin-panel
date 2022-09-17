import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setAccessToken(accessToken: string, expiredIn: number): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiredIn', expiredIn.toString());
  }

  public getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public removeAccessToken(): void {
    localStorage.clear();
  }

  public tokenExpired(): boolean {
    return (
      !this.getAccessToken() &&
      parseInt(localStorage.getItem('expiredIn') || '0') <= 0
    );
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  payload(token: string): any {
    const tokenPayload = token.split('.')[1];
    return JSON.parse(atob(tokenPayload));
  }
}
