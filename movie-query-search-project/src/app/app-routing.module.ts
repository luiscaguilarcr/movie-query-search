import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
    data: { title: 'Movie List' },
  },
  {
    path: 'details',
    component: MovieDetailsComponent,
    data: { title: 'Movie Details' },
  },
  { path: '**', pathMatch: 'full', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
