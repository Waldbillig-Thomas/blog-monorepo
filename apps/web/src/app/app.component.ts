import { Component } from '@angular/core';

@Component({
  selector: 'blog-root',
  template: `
    <blog-navigation [isDark]="isDark" (toggleTheme)="switchTheme()">
      <ng-container links>
        <mat-nav-list>
          <a mat-list-item routerLinkActive="active" routerLink="/author">
            <mat-icon mat-list-icon>people</mat-icon>
            <div mat-line>Authors</div>
          </a>

          <a mat-list-item routerLinkActive="active" routerLink="/post">
            <mat-icon mat-list-icon>message</mat-icon>
            <div mat-line>Posts</div>
          </a>
        </mat-nav-list>

        <br />

        <mat-slide-toggle [checked]="isDark" (toggleChange)="switchTheme()">
          Dark Mode
        </mat-slide-toggle>
      </ng-container>

      <router-outlet></router-outlet>
    </blog-navigation>
  `,
  styles: [
    `
      :host {
        mat-accordion {
          display: block;
          margin: 16px;
        }

        [mat-list-item].active {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    `,
  ],
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
    body.classList.remove(this.isDark ? 'light-theme' : 'dark-theme');
    body.classList.add(this.isDark ? 'dark-theme' : 'light-theme');
  }
}
