import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostTableComponent } from './post-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PostPageComponent } from './post-page.component';


@NgModule({
  declarations: [PostTableComponent, PostPageComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class PostModule { }
