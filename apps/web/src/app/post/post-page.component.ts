import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blog-post-page',
  template: `
    <p>
      post-page works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
