import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  tconstMovies: any = [];
  movies: any = [];
  movie: any;

  constructor(public rest: RestService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getMostPopularMoviesDetailsList();
  }

  getMostPopularMoviesDetailsList() {
    this.getMostPopularMoviesList();
    this.tconstMovies.forEach((tconst: string) => this.getMovieDetailsByTconst(tconst));
  }

  /**
   * Gets the list of tcosnt movies
   * @returns list of tcosnt movies.
   */
  getMostPopularMoviesList() {
    this.rest.getMostPopularMoviesList().subscribe((data: {}) => {
      this.tconstMovies = data;
    });
  }

  /**
   * Gets the movie filtered by tconst.
   * @returns filtered movie.
   */
  getMovieDetailsByTconst(tconst: string) {
    alert(tconst)
    this.rest.getMovieDetailsByTconst(tconst).subscribe((data: {}) => {
      this.movies.push(data);
    });
  }

  open(contenido, tconst: string) {
    this.modalService.open(contenido, { size: 'lg' });

    this.rest.getMovieDetailsByTconst(tconst).subscribe((data: {}) => {
      this.movie = data;
    });
  }
}
