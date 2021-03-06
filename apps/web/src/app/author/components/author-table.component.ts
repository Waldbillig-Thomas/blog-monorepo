import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AuthorEntryFragment } from '../../../generated/graphql';

@Component({
  selector: 'blog-author-table',
  template: `
    <ng-container *ngIf="entries.length === 0; then empty; else table">
    </ng-container>

    <ng-template #empty> empty </ng-template>

    <ng-template #table>
      <table mat-table matSort aria-label="Authors" [dataSource]="entries">
        <!-- More  -->
        <ng-container matColumnDef="more">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let row">
            <div class="actions">
              <button
                mat-icon-button
                class="show-more"
                (click)="authorSelected.emit(row)"
              >
                <mat-icon>expand_more</mat-icon>
              </button>
              <!-- <button mat-icon-button class="show-less">
                <mat-icon>expand_less</mat-icon>
              </button> -->
            </div>
          </td>
        </ng-container>

        <!-- Id -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">
            {{ row.id }}
          </td>
        </ng-container>

        <!-- First Name -->
        <ng-container matColumnDef="firstName">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>
          <td mat-cell *matCellDef="let row">
            {{ row.firstName }}
          </td>
        </ng-container>

        <!-- Last Name -->
        <ng-container matColumnDef="lastName">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>lastName</th>
          <td mat-cell *matCellDef="let row">
            {{ row.lastName }}
          </td>
        </ng-container>

        <!-- Gender  -->
        <ng-container matColumnDef="gender">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Gender</th>
          <td mat-cell *matCellDef="let row">
            <ng-container *ngIf="row.gender | lowercase as gender">
              <mat-icon [ngClass]="gender"> {{ gender }} </mat-icon>
            </ng-container>
          </td>
        </ng-container>

        <!-- Created At  -->
        <ng-container matColumnDef="createdAt">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Created At</th>
          <td mat-cell *matCellDef="let row">
            {{ row.createdAt | date: 'short' }}
          </td>
        </ng-container>

        <!-- Updated At  -->
        <ng-container matColumnDef="updatedAt">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Updated At</th>
          <td mat-cell *matCellDef="let row">
            {{ row.updatedAt | date: 'short' }}
          </td>
        </ng-container>

        <!-- Delete  -->
        <!-- <ng-container matColumnDef="delete">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let row">
            <button mat-icon-button class="delete">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container> -->

        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns"></tr>
      </table>
    </ng-template>
  `,
  styles: [
    `
      table {
        width: 100%;
      }

      [mat-cell],
      [mat-header-cell] {
        padding: 4px !important;
      }

      mat-icon {
        &.male {
          color: steelblue;
        }
        &.female {
          color: hotpink;
        }
      }

      .mat-column-delete {
        color: tomato;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorTableComponent {
  @Input()
  entries!: AuthorEntryFragment[];

  @Input()
  columns!: (keyof AuthorEntryFragment | 'more')[];

  @Output()
  authorSelected = new EventEmitter<AuthorEntryFragment>();

  // constructor() {}
}
