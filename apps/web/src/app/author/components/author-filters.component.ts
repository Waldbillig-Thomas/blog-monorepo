import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-author-filters',
  template: ` <p>author-filters works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorFiltersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
