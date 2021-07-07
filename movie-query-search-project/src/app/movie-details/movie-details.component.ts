import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
})

export class MovieDetailsComponent implements OnInit {
  movie: any; 

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log(this.movie);
  }

}
