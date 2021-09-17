import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { combineLatest } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import {
  AuthorEntryFragment,
  AuthorSearchGQL,
  PaginationFragment,
} from '../../generated/graphql';

export type AuthorFilters = any;

export interface AuthorsState {
  columns: (keyof AuthorEntryFragment | 'more')[];
  entries: AuthorEntryFragment[];
  filters: AuthorFilters;
  pagination: PaginationFragment;
}

export const defaultColumns: (keyof AuthorEntryFragment | 'more')[] = [
  'more',
  'id',
  'firstName',
  'lastName',
  'gender',
  'createdAt',
  'updatedAt',
];

@Injectable()
export class AuthorsStore
  extends ComponentStore<AuthorsState>
  implements OnDestroy
{
  readonly columns$ = this.select(({ columns }) => columns);
  readonly dto$ = this.select(({ pagination }) => pagination);
  readonly entries$ = this.select(({ entries }) => entries);
  readonly filters$ = this.select(({ filters }) => filters);
  readonly pagination$ = this.select(({ pagination }) => pagination);

  constructor(private readonly authorSearchGQL: AuthorSearchGQL) {
    super({
      columns: defaultColumns,
      entries: [],
      filters: {},
      pagination: { total: 0, pageIndex: 0, pageSize: 10 },
    });

    combineLatest([this.filters$, this.pagination$])
      .pipe(
        debounceTime(300),
        switchMap(([, { pageSize, pageIndex }]) =>
          this.authorSearchGQL.fetch({
            take: pageSize,
            skip: pageIndex * pageSize,
          })
        ),
        tap(({ data: { entries } }) => this.updateResults(entries)),
        tap(({ data: { pagination } }) => this.updatePagination(pagination))
      )
      .subscribe();
  }

  readonly updateResults = this.updater(
    (state, entries: AuthorEntryFragment[]): AuthorsState => ({
      ...state,
      entries,
    })
  );

  readonly updateFilters = this.updater(
    (state, filters: AuthorFilters): AuthorsState => ({
      ...state,
      filters,
    })
  );

  readonly updatePagination = this.updater(
    (state, pagination: PaginationFragment): AuthorsState => ({
      ...state,
      pagination,
    })
  );
}
