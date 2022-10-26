import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-link',
  template: `
    <a
      [routerLink]="link"
      [ngClass]="class"
      class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
      <ng-content></ng-content>
    </a>
  `,
})
export class ButtonLinkComponent {
  @Input() link!: any;
  @Input() class!: string;
}
