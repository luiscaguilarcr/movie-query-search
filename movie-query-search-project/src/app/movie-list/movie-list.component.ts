import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any = [];
  movie: any;

  constructor(public rest: RestService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getMostPopularMoviesList();
  }

  /**
   * Gets the movie details.
   * @returns filtered movie.
   */
   getMostPopularMoviesList() {
    this.rest.getMostPopularMovieDetailsList().subscribe((data:{}) => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  open(content, tconst: any) {
    this.modalService.open(content);
    
    this.rest.getMovieDetailsByTconst(tconst).subscribe((data:{}) => {
      this.movie = data[0];
      console.log(this.movie);
    });
  }

  openTwo(content) {
    this.modalService.open(content);
    
  }
}
