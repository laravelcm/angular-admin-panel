import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cosna-button-primary',
  templateUrl: './primary.component.html',
})
export class PrimaryComponent {

  @Input() type: string = 'button';

  @Input() loading$!: Observable<boolean>;
  
  @Input() class!: string;

}
