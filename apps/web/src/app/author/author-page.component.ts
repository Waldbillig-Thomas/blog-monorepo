import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blog-author-page',
  template: `
    <p>
      author-page works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
