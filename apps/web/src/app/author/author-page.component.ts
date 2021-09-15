import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthorsStore } from './authors.store';

@Component({
  selector: 'blog-author-page',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthorsStore],
})
export class AuthorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
