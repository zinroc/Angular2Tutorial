import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-inline',
  template: '<h1>{{title}}</h1>'
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}
