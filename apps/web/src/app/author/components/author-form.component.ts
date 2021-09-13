import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blog-author-form',
  template: `
    <p>
      author-form works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
