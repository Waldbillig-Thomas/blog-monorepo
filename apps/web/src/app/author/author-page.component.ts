import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthorsStore } from './authors.store';

@Component({
  selector: 'blog-author-page',
  template: `
    <!-- <pre>{{ temp$ | async | json }}</pre> -->
    <router-outlet></router-outlet>
  `,
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
  temp$ = this.authorsStore.authorEntries$;

  constructor(private readonly authorsStore: AuthorsStore) {}

  ngOnInit(): void {
    // console.log(this.authorSearchGQL.document);
  }
}
