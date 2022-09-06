import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  public error!: string;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submit() {
    console.log(this.form.getRawValue());
  }

}
