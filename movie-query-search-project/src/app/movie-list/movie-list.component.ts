import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  tconstMovies: any = [];
  movies: any = [];
  movie: any;

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getMostPopularMoviesDetailsList();
  }

  getMostPopularMoviesDetailsList() {
    this.getMostPopularMoviesList();
    this.getMovieDetailsByTconst('tt0944947');
    /*
    for (let tconst of this.tconstMovies){
      this.getMovieDetailsByTconst(tconst.slice(7, -2));
      this.movies.push(this.movie);
    }
    */
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
    this.rest.getMovieDetailsByTconst(tconst).subscribe((data: {}) => {
      this.movies.push(data);
    });
  }

  open(contenido, tconst:string) {
    this.modalService.open(contenido, {size:'lg'});
    
    this.rest.getMovieDetailsByTconst(tconst.slice(7, -2)).subscribe((data: {}) => {
      this.movie = data;
    });
  }
}

