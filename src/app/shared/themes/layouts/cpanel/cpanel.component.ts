import { Component, OnInit } from '@angular/core';

import { adminMenu } from '@modules/dashboard/navigation/admin.menu';

@Component({
  selector: 'cosna-cpanel-layout',
  templateUrl: './cpanel.component.html',
})
export class CpanelComponent implements OnInit {

  menus = adminMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
