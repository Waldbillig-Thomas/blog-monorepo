import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AuthorDetailsFragment,
  AuthorDetailsGQL,
} from '../../../generated/graphql';

@Component({
  selector: 'blog-author-datails-page',
  template: `
    <mat-card *ngIf="details$ | async as details" class="mat-elevation-z3">
      <mat-card-header>
        <div mat-card-avatar><mat-icon>person</mat-icon></div>
        <mat-card-title> Author Details </mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <blog-author-details [details]="details"></blog-author-details>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;

        mat-card {
          overflow: auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDatailsPageComponent implements OnInit {
  details$: Observable<AuthorDetailsFragment>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authorDetailsGQL: AuthorDetailsGQL
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.details$ = this.authorDetailsGQL
      .fetch({ id })
      .pipe(map(({ data: { details } }) => details));
  }

  ngOnInit(): void {}
}
