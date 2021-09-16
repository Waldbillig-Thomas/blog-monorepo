import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthorsStore } from '../authors.store';

@Component({
  selector: 'blog-author-list-page',
  template: `
    <mat-card class="mat-elevation-z3">
      <mat-card-header>
        <!-- <div mat-card-avatar><mat-icon>person</mat-icon></div> -->
        <mat-card-title> Authors </mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
        <!-- <blog-author-filters></blog-author-filters> -->
        <mat-chip-list>
          <mat-chip>
            Filter 1 <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <mat-chip color="primary" selected>
            Filter 2 <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <mat-chip color="accent" selected>
            Filter 3 <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <mat-chip color="primary">
            Filter 4 <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
        </mat-chip-list>
      </mat-card-header>

      <mat-card-content>
        <ng-container *ngIf="entries$ | async as entries">
          <blog-author-table [entries]="entries"></blog-author-table>
        </ng-container>
      </mat-card-content>

      <mat-card-actions *ngIf="pagination$ | async as pagination">
        <mat-paginator
          #paginator
          color="accent"
          [length]="pagination.total"
          [pageIndex]="pagination.pageIndex"
          [pageSize]="pagination.pageSize"
          [pageSizeOptions]="[5, 10, 20]"
          aria-label="Select page"
        ></mat-paginator>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      mat-card {
        margin: 16px;
        display: flex;
        flex-direction: column;
        min-height: 400px;
      }

      mat-card-content {
        flex: 1 1 auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorListPageComponent implements OnInit {
  entries$ = this.authorsStore.entries$;
  pagination$ = this.authorsStore.pagination$;

  constructor(private readonly authorsStore: AuthorsStore) {}

  ngOnInit(): void {}
}
