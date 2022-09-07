import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cosna-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {
  @Input() class!: string;
  @Input() message!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
