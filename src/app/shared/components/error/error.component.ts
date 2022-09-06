import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cosna-errors',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() class!: string;
  @Input() message!: string;
  @Input() errors: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
