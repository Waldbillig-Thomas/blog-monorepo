import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorTableComponent } from './author-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AuthorPageComponent } from './author-page.component';


@NgModule({
  declarations: [AuthorTableComponent, AuthorPageComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AuthorModule { }
