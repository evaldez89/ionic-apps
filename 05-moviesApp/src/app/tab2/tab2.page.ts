import { Component } from '@angular/core';
import { MoviesDataService } from '../services/movies-data.service';
import { MovieDetails } from '../interfaces/movie.details.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchedMovies: MovieDetails[] = [];
  searchText = '';
  suggestedMovies = [
    'Batman: El caballero de la noche',
    'Click',
    'Transformers'
  ];
  isSearching = false;

  constructor(private movieService: MoviesDataService) {}

  searchMovie(event) {
    const searchTerm = event.detail.value;
    this.isSearching = true;

    if (searchTerm) {
      this.movieService.searchMovie(searchTerm).subscribe(resp => {
        this.searchedMovies = resp.results;
        this.isSearching = false;
      });
    } else {
      this.isSearching = false;
    }
  }
}
