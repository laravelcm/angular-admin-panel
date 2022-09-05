import { Component, Input, OnInit } from '@angular/core';

import { Menu } from '@app/shared/interfaces/menu';

@Component({
  selector: 'cosna-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {
  @Input() menus!: Menu[];

  constructor() {}

  ngOnInit(): void {
  }

}
