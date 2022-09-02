import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  emails: string[] = [
    'manfouothierno@isdg-sarl.com',
    'patouossaibrahim@yahoo.com',
    'monneylobe@gmail.com',
  ];

  canActivate(): boolean {
    return true;
  }
  
}