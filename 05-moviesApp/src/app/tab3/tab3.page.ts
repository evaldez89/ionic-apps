import { Component } from '@angular/core';
import { MovieDetails, Genre } from '../interfaces/movie.details.interface';
import { LocalStorageService } from '../services/local-storage.service';
import { MoviesDataService } from '../services/movies-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favoriteMovies: MovieDetails[] = [];
  genres: Genre[] = [];
  moviesByCategory: any[] = [];

  constructor( private localData: LocalStorageService,
               private movieService: MoviesDataService ) {}


  async ionViewWillEnter() {
    this.favoriteMovies = await this.localData.loadFavorites();
    this.genres = await this.movieService.loadGenres();
    this.groupMoviesByCategory();
  }

  groupMoviesByCategory() {
    this.moviesByCategory = [];
    this.genres.forEach(genre => {
      this.moviesByCategory.push({
        genre: genre.name,
        movies: this.favoriteMovies.filter( movie => movie.genres.find( g => g.id === genre.id ) )
      });
    });
  }

}
