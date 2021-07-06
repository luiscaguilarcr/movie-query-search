import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
    data: { title: 'Movie List' },
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
