import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'/*,
  styleUrls: ['./movie-details.component.css'],*/
})
export class MovieDetailsComponent implements OnInit {
  @Input() tconst;
  movie: any;

  constructor(
    public rest: RestService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    
  }

}
