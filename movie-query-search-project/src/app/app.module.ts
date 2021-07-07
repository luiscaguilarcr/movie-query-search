import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
    data: { title: 'Movie List' },
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
    data: { title: 'Student Details' }
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
