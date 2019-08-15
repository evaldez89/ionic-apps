import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../services/movies-data.service';
import { Movie } from '../interfaces/movie.interface';
import { DatePipe } from '@angular/common';
import { MonthLimits } from '../interfaces/month.class';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor( private movieService: MoviesDataService,
               private datePipe: DatePipe ) {}

  loadPopularMovies() {
    this.movieService.getPopular()
      .subscribe( resp => {
        const updateMoviesArray = [ ...this.popularMovies , ...resp.results ];
        this.popularMovies = updateMoviesArray;
      });
  }

  ngOnInit() {
    const monthLimits = new MonthLimits();

    const initialDate = this.datePipe.transform(monthLimits.firstDay, 'yyyy-MM-dd');
    const finalDate = this.datePipe.transform(monthLimits.lastDay, 'yyyy-MM-dd');
    console.log();

    this.movieService.getMovies(initialDate, finalDate, 'es')
    .subscribe( resp => {
      this.recentMovies = resp.results;
    });

    this.loadPopularMovies();
  }

  nextPopularMovies() {
    this.loadPopularMovies();
  }
}
