import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationFragment } from '../../../generated/graphql';
import { AuthorsStore } from '../authors.store';

@Component({
  selector: 'blog-author-list-page',
  template: `
    <mat-drawer-container class="mat-elevation-z3" hasBackdrop="false">
      <mat-drawer #drawer mode="over" position="end">
        <button mat-icon-button (click)="drawer.close()">
          <mat-icon>close</mat-icon>
        </button>
        <blog-author-filters></blog-author-filters>
      </mat-drawer>

      <mat-drawer-content>
        <mat-card>
          <mat-card-header>
            <div mat-card-avatar>
              <button
                mat-icon-button
                [color]="drawer.opened ? 'primary' : ''"
                (click)="drawer.toggle()"
              >
                <mat-icon>tune</mat-icon>
              </button>
            </div>
            <mat-card-title> Authors </mat-card-title>
            <mat-card-subtitle> Entity </mat-card-subtitle>

            <div class="spacer"></div>

            <ng-container
              [ngTemplateOutlet]="paginator"
              [ngTemplateOutletContext]="{ $implicit: pagination$ | async }"
            ></ng-container>
          </mat-card-header>

          <mat-card-content>
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
            </mat-chip-list>

            <blog-author-table
              *ngIf="tableData$ | async as data"
              [columns]="data.columns"
              [entries]="data.entries"
            ></blog-author-table>
          </mat-card-content>

          <mat-card-actions *ngIf="pagination$ | async as pagination">
            <ng-container
              [ngTemplateOutlet]="paginator"
              [ngTemplateOutletContext]="{ $implicit: pagination$ | async }"
            ></ng-container>
          </mat-card-actions>
        </mat-card>
      </mat-drawer-content>
    </mat-drawer-container>

    <!-- Paginator -->
    <ng-template #paginator let-pagination>
      <mat-paginator
        [length]="pagination.total"
        [pageIndex]="pagination.pageIndex"
        [pageSize]="pagination.pageSize"
        [pageSizeOptions]="[10, 25, 50, 100]"
        (page)="updatePagination($event)"
        aria-label="Select page"
      ></mat-paginator>
    </ng-template>
  `,
  styles: [
    `
      :host {
        mat-drawer-container {
          margin: 16px;

          mat-card-header,
          mat-card-actions {
            background-color: rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin: -16px;
          }
        }

        mat-chip-list {
          display: block;
          margin-top: 16px;
          margin-bottom: 16px;
        }

        mat-card {
          display: flex;
          flex-direction: column;
          min-height: 450px;

          mat-card-content {
            flex: 1 1 auto;
            padding-top: 16px;
          }

          .spacer {
            flex: 1 1 auto;
          }
        }

        mat-paginator {
          background-color: transparent;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorListPageComponent implements OnInit {
  pagination$ = this.authorsStore.pagination$;
  tableData$ = combineLatest([
    this.authorsStore.columns$,
    this.authorsStore.entries$,
  ]).pipe(map(([columns, entries]) => ({ columns, entries })));

  constructor(private readonly authorsStore: AuthorsStore) {}

  ngOnInit(): void {}

  updatePagination({ pageIndex, pageSize, length: total }: PageEvent) {
    const pagination: PaginationFragment = { pageIndex, pageSize, total };
    this.authorsStore.updatePagination(pagination);
  }
}
