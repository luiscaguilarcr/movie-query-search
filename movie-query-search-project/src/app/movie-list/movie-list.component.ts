import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

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

  showDetails(movie:any){
    const ref = this.modalService.open(MovieDetailsComponent);

    ref.componentInstance.movie = movie;
  }
  
}
