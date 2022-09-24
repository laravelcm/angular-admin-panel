import { Component } from '@angular/core';

@Component({
  selector: 'loader-user-profile-with-name-skeleton',
  template: `
    <div class="flex items-center">
      <div class="w-10 h-10 shrink-0">
        <ngx-skeleton-loader
          count="1"
          appearance="circle"
          animation="pulse"
          [theme]="{
            'background-color': '#f3f4f6',
            'border-radius': '999',
            height: '40px',
            width: '40px',
            margin: '0'
          }"></ngx-skeleton-loader>
      </div>
      <div class="flex flex-col w-full ml-4">
        <ngx-skeleton-loader
          count="1"
          appearance="line"
          animation="pulse"
          [theme]="{
            'border-radius': '4',
            'margin-bottom': '0',
            width: '40%',
            height: '16px'
          }"></ngx-skeleton-loader>
        <ngx-skeleton-loader
          count="1"
          appearance="line"
          animation="pulse"
          [theme]="{
            'border-radius': '4',
            marginBottom: '0',
            width: '90%',
            height: '16px'
          }"></ngx-skeleton-loader>
      </div>
    </div>
  `,
})
export class UserProfileWithNameSkeletonComponent {}
