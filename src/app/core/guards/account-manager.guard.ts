import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerGuard implements CanActivate {
  
  emails: string[] = [
    'manidimi05@gmail.com',
    'vanessakenfack@cosnafrique.com',
    'amynagassama@gmail.com',
    'kevintstopjio@gmail.com',
    'yeckegaetan@gmail.com',
  ];

  canActivate(): boolean {
    return true;
  }

}