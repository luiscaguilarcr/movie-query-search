import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  tconstMovies:any = [];
  movies:any = [];
  movie:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  
  getMostPopularMoviesDetailsList(){
    this.getMostPopularMoviesList();
    
    for (let tconst of this.tconstMovies){
      this.getMovieDetailsByTconst(tconst);
      this.movies.push(this.movie);
    }
  }

  /**
   * Gets the list of tcosnt movies
   * @returns list of tcosnt movies. 
   */
  getMostPopularMoviesList() {
    this.tconstMovies = [];
    this.rest.getMostPopularMoviesList().subscribe((data: {}) => {
      this.tconstMovies = data;
    });
  }
  
  /**
   * Gets the movie filtered by tconst.
   * @returns filtered movie.
   */
  getMovieDetailsByTconst(tconst:string) {
    
    this.rest.getMovieDetailsByTconst(tconst.replace('/','').replace('title','')).subscribe((data: {}) => {
      this.movie = data;
    });
  }

}
