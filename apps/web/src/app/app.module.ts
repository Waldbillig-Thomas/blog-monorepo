import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const ApolloProvider: Provider = {
  provide: APOLLO_OPTIONS,
  useFactory: (httpLink: HttpLink) => {
    return {
      cache: new InMemoryCache(),
      link: httpLink.create({ uri: 'http://localhost:4000/graphql' }),
    };
  },
  deps: [HttpLink],
};

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
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [ApolloProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
