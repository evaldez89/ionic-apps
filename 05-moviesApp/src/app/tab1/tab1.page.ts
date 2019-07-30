import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../services/movies-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor( private movieService: MoviesDataService ) {}

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe( resp => {
      console.log( resp.results );
    });
  }

}
