import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { MovieDetails } from 'src/app/interfaces/movie.details.interface';
import { MovieCredits } from 'src/app/interfaces/movie.credits.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movieId: number;
  movieDetails: MovieDetails;
  movieCredits: MovieCredits;
  overviewLimit = 150;

  constructor( private movieService: MoviesDataService ) { }

  ngOnInit() {

    this.movieService.getMovieDetails(this.movieId).subscribe(
      resp => {
        this.movieDetails = resp;
      }
    );

    this.movieService.getMovieCredits(this.movieId).subscribe(
      resp => {
        this.movieCredits = resp;
      }
    );
  }

}
