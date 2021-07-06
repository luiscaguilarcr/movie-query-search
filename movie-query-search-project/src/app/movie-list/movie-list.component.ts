import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:any = [];
  movie:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Gets the list of movies
   * @returns list of movies. 
   */
  getMostPopularMoviesList() {
    this.movie = [];
    this.rest.getMostPopularMoviesList().subscribe((data: {}) => {
      this.movies = data;
    });
  }
  
  /**
   * Gets the movie filtered by tconst.
   * @returns filtered movie.
   */
  getMovieDetailsByTconst(tconst:string) {
    this.rest.getMovieDetailsByTconst(tconst).subscribe((data: {}) => {
      this.movie = data;
    });
  }

}
