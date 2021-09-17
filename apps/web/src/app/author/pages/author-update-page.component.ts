import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-author-update-page',
  template: `<p>author-update-page works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorUpdatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
