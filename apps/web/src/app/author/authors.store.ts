import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs/operators';
import { AuthorEntryFragment, AuthorSearchGQL } from '../../generated/graphql';

export type AuthorFilters = any;

export interface AuthorsState {
  authorEntries: AuthorEntryFragment[];
  filters: AuthorFilters;
  pagination: any;
}

@Injectable()
export class AuthorsStore
  extends ComponentStore<AuthorsState>
  implements OnDestroy
{
  readonly authorEntries$ = this.select(({ authorEntries }) => authorEntries);

  constructor(private readonly authorSearchGQL: AuthorSearchGQL) {
    super({ authorEntries: [], filters: {}, pagination: {} });

    this.authorSearchGQL
      .fetch()
      .pipe(map(({ data: { AuthorFindMany } }) => AuthorFindMany))
      .subscribe((authorEntries) =>
        this.setState((state) => ({ ...state, authorEntries }))
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

  readonly updateFilters = this.updater((state, filters: AuthorFilters) => ({
    ...state,
    filters,
  }));

  readonly updatePagination = this.updater(
    (state, pagination: AuthorFilters) => ({
      ...state,
      pagination,
    })
  );
}
