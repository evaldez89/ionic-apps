import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../services/movies-data.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[];

  constructor( private movieService: MoviesDataService ) {}

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe( resp => {
      this.recentMovies = resp.results;
    });
  }

}
