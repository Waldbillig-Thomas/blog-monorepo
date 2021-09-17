import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

            <ng-container *ngIf="entries$ | async as entries">
              <blog-author-table [entries]="entries"></blog-author-table>
            </ng-container>
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
        [pageSizeOptions]="[5, 10, 20]"
        aria-label="Select page"
      ></mat-paginator>
    </ng-template>
  `,
  styles: [
    `
      :host {
        mat-drawer-container {
          margin: 16px;
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
          }

          .spacer {
            flex: 1 1 auto;
          }
        }
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
