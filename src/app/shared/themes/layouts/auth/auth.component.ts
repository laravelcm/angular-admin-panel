import { Component } from '@angular/core';

@Component({
  selector: 'cosna-auth-layout',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  date: number = new Date().getFullYear();
}
