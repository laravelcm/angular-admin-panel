import { Component, Input, OnInit } from '@angular/core';

import { Menu } from '@app/shared/interfaces/menu';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() menus!: Menu[];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.menus = this.sidebarService.renderSidebar();
  }
}
