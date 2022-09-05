import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public email!: string;
  public password!: string;
  public error!: string;
  date: number = (new Date()).getFullYear();
  
  constructor() {}

  getValue(value: string) {
    console.log(value);
  }

  ngOnInit(): void {}

  public submit() {
    console.log(this.email, this.password);
  }

}
