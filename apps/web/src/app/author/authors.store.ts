import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  AuthorEntryFragment,
  AuthorSearchGQL,
  Pagination,
} from '../../generated/graphql';

export type AuthorFilters = any;

export interface AuthorsState {
  entries: AuthorEntryFragment[];
  filters: AuthorFilters;
  pagination: Pagination;
}

@Injectable()
export class AuthorsStore
  extends ComponentStore<AuthorsState>
  implements OnDestroy
{
  readonly entries$ = this.select(({ entries }) => entries);
  readonly pagination$ = this.select(({ pagination }) => pagination);

  constructor(private readonly authorSearchGQL: AuthorSearchGQL) {
    super({
      entries: [],
      filters: {},
      pagination: { total: 0, pageIndex: 0, pageSize: 0 },
    });

    this.authorSearchGQL
      .fetch()
      .subscribe(({ data: { pagination, entries } }) =>
        this.setState(
          (state): AuthorsState => ({ ...state, pagination, entries })
        )
      );
  }

  // readonly getMovie = this.effect((movieId$: Observable<string>) => {
  //   return movieId$.pipe(
  //     // 👇 Handle race condition with the proper choice of the flattening operator.
  //     switchMap((id) =>
  //       this.moviesService.fetchMovie(id).pipe(
  //         //👇 Act on the result within inner pipe.
  //         tap({
  //           next: (movie) => this.addMovie(movie),
  //           error: (e) => this.logError(e),
  //         }),
  //         // 👇 Handle potential error within inner pipe.
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   );
  // });

  readonly updateResults = this.updater(
    (state, entries: AuthorEntryFragment[]): AuthorsState => ({
      ...state,
      entries,
    })
  );

  readonly updateFilters = this.updater(
    (state, filters: AuthorFilters): AuthorsState => ({ ...state, filters })
  );

  readonly updatePagination = this.updater(
    (state, pagination: Pagination): AuthorsState => ({ ...state, pagination })
  );
}
