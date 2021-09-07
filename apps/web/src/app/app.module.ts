import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { CoreModule } from './core/core.module';
import { PostModule } from './post/post.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'author' },
  {
    path: 'author',
    loadChildren: () =>
      import('./author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthorModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    PostModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
