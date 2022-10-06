import { Component } from '@angular/core';

@Component({
  selector: 'drawer-button',
  template: `
    <button type="button" class="inline-flex items-center text-sm leading-5">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonDrawerComponent {}
