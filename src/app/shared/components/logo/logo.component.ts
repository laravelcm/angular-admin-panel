import { Component, Input } from '@angular/core';

@Component({
  selector: 'cosna-logo-svg',
  templateUrl: './logo.component.html',
})
export class LogoComponent {

  @Input('class') 
  class: string = '';

  constructor() { }

}
