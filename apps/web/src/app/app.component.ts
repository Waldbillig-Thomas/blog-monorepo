import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'blog-root',
  template: `
    <blog-navigation>
      <router-outlet></router-outlet>
    </blog-navigation>
  `,
  styles: [],
})
export class AppComponent {
  @HostBinding('class')
  theme = 'dark-theme';
}
