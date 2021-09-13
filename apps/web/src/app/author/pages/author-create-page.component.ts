import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-author-create-page',
  template: ` <p>author-create-page works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorCreatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
