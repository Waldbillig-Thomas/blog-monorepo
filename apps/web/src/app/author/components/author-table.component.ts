import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthorEntryFragment } from '../../../generated/graphql';

@Component({
  selector: 'blog-author-table',
  template: `
    <ng-container *ngIf="entries.length === 0; then empty; else table">
    </ng-container>

    <ng-template #empty> empty </ng-template>

    <ng-template #table>
      <table mat-table matSort aria-label="Authors" [dataSource]="entries">
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

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
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
        padding: 4px;
        text-align: center;
      }

      mat-icon {
        &.male {
          color: steelblue;
        }
        &.female {
          color: hotpink;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorTableComponent {
  @Input()
  entries!: AuthorEntryFragment[];

  displayedColumns: (keyof AuthorEntryFragment)[] = [
    // 'id',
    'firstName',
    'lastName',
    'gender',
    'createdAt',
    'updatedAt',
  ];

  // constructor() {}
}
