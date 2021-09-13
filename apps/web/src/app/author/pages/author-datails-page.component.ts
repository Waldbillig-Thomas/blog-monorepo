import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blog-author-datails-page',
  template: `
    <p>
      author-datails-page works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorDatailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
