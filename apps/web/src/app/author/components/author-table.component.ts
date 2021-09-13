import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthorEntryFragment } from '../../../generated/graphql';
import { AuthorsStore } from '../authors.store';

@Component({
  selector: 'blog-author-table',
  template: `
    <!-- <ng-container *ngIf="authorEntries$ | async as authorEntries"> -->
    <!-- <ng-container *ngIf="authorEntries.length === 0; then empty; else table">
      </ng-container> -->

    <!-- <ng-template #empty> empty </ng-template> -->

    <!-- <ng-template #table> -->
    <table mat-table matSort aria-label="Authors" [dataSource]="authorEntries">
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
          {{ row.gender }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
    <!-- </ng-template> -->
    <!-- </ng-container> -->

    <!-- <mat-paginator
      #paginator
      [length]="dataSource?.data?.length"
      [pageIndex]="0"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 20]"
      aria-label="Select page"
    ></mat-paginator> -->
    <!-- </ng-container> -->
  `,
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorTableComponent {
  @Input()
  authorEntries!: AuthorEntryFragment[];

  authorEntries$ = this.authorsStore.authorEntries$;

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort)
  // sort!: MatSort;
  // @ViewChild(MatTable)
  // table!: MatTable<any>;
  // dataSource: AuthorTableDataSource;
  // /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: (keyof AuthorEntryFragment)[] = [
    'id',
    'firstName',
    'lastName',
    'gender',
  ];

  constructor(private readonly authorsStore: AuthorsStore) {
    // this.dataSource = authorTableDataSource;
  }

  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
