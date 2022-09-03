import { Component, Input, OnInit } from '@angular/core';

import { Menu } from '@app/shared/interfaces/menu';

@Component({
  selector: 'cosna-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {
  @Input() menus?: Menu[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.menus);
  }

  isArray(value: string | []): boolean {
    return Array.isArray(value);
  }

}
