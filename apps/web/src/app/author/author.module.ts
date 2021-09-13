import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuthorPageComponent } from './author-page.component';
import { AuthorRoutingModule } from './author-routing.module';
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
    AuthorFormComponent,
    AuthorListPageComponent,
    AuthorPageComponent,
    AuthorTableComponent,
    AuthorUpdatePageComponent,
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class AuthorModule {}
