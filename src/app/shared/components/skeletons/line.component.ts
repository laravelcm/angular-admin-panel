import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderConfigTheme } from 'ngx-skeleton-loader';

@Component({
  selector: 'loader-line-skeleton',
  template: `
    <div [class]="class">
      <ngx-skeleton-loader
        [count]="count"
        [animation]="animation"
        [theme]="theme"
        appearance="line"></ngx-skeleton-loader>
    </div>
  `,
})
export class LineSkeletonComponent {
  @Input() class!: string;

  @Input() theme!: NgxSkeletonLoaderConfigTheme;

  @Input() count: number = 1;

  @Input() animation: string = 'pulse';

  defaultTheme: NgxSkeletonLoaderConfigTheme = {
    borderRadius: '4px',
    height: '16px',
    margin: '0',
  };

  constructor() {
    this.theme = {
      ...this.defaultTheme,
      ...this.theme,
    };
  }
}
