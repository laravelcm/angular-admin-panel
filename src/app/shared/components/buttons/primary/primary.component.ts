import { Component, Input } from '@angular/core';

@Component({
  selector: 'cosna-button-primary',
  templateUrl: './primary.component.html',
})
export class PrimaryComponent {

  @Input()
  type: string = 'button';

  @Input()
  disabled: boolean = false;

  @Input()
  class: string = '';

}
