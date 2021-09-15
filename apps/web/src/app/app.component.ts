import { Component } from '@angular/core';

@Component({
  selector: 'blog-root',
  template: `
    <blog-navigation [isDark]="isDark" (toggleTheme)="switchTheme()">
      <router-outlet></router-outlet>
    </blog-navigation>
  `,
  styles: [],
})
export class AppComponent {
  isDark = true;

  constructor() {
    this.updateTheme();
  }

  switchTheme() {
    this.isDark = !this.isDark;
    this.updateTheme();
  }

  updateTheme() {
    const body = document.getElementsByTagName('body')[0];
    if (this.isDark) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }
}
