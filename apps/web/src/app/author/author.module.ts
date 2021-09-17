import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuthorPageComponent } from './author-page.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorFiltersComponent } from './components/author-filters.component';
import { AuthorFormComponent } from './components/author-form.component';
import { AuthorTableComponent } from './components/author-table.component';
import { AuthorCreatePageComponent } from './pages/author-create-page.component';
import { AuthorDatailsPageComponent } from './pages/author-datails-page.component';
import { AuthorListPageComponent } from './pages/author-list-page.component';
import { AuthorUpdatePageComponent } from './pages/author-update-page.component';

@NgModule({
  declarations: [
    AuthorCreatePageComponent,
    AuthorDatailsPageComponent,
    AuthorFiltersComponent,
    AuthorFormComponent,
    AuthorListPageComponent,
    AuthorPageComponent,
    AuthorTableComponent,
    AuthorUpdatePageComponent,
  ],
  imports: [
    AuthorRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class AuthorModule {}
