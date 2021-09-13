import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorPageComponent } from './author-page.component';
import { AuthorCreatePageComponent } from './pages/author-create-page.component';
import { AuthorDatailsPageComponent } from './pages/author-datails-page.component';
import { AuthorListPageComponent } from './pages/author-list-page.component';
import { AuthorUpdatePageComponent } from './pages/author-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorPageComponent,
    children: [
      { path: '', component: AuthorListPageComponent, pathMatch: 'full' },
      { path: 'create', component: AuthorCreatePageComponent },
      { path: 'details/:id', component: AuthorDatailsPageComponent },
      { path: 'update/:id', component: AuthorUpdatePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
