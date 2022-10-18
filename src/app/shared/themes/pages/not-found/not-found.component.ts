import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

@Component({
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  homeUrl!: string;
  isLoggedIn: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.localStorageService.getAccessToken();

    this.isLoggedIn = this.localStorageService.getAccessToken() ? true : false;

    if (!token) {
      this.router.navigateByUrl('/auth/login');
    }

    this.homeUrl = '/dashboard';
  }

  redirectToHome() {
    this.router.navigateByUrl(`${this.homeUrl}`);
  }
}
