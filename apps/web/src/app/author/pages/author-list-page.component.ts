import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-author-list-page',
  template: `<blog-author-table></blog-author-table>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorListPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
