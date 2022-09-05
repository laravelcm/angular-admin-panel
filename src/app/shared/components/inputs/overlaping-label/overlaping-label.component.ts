import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cosna-input-overlaping-label',
  templateUrl: './overlaping-label.component.html',
  styleUrls: ['./overlaping-label.component.scss']
})
export class OverlapingLabelComponent implements OnInit {
  
  @Input()
  value: string = '';

  @Input()
  label: string|null = '';

  @Input() 
  placeholder: string|null = ''; 

  @Input() 
  name: string = ''; 

  @Input()
  type: string = 'text';

  @Input()
  required: boolean = false;

  @Input()
  containerClass = '';

  @Input()
  inputClass = '';

  @Input()
  helpText: string|null = null;

  ngOnInit(): void {
  }

}
