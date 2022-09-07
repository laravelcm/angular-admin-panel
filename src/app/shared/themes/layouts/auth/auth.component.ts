import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cosna-auth-layout',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  date: number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
