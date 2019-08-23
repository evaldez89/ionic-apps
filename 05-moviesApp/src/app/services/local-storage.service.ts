import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Movie } from '../interfaces/movie.interface';
import { MovieDetails } from '../interfaces/movie.details.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  favoriteMovies: MovieDetails[] = [];

  constructor( private storage: Storage ) { }

  saveFavorite( movie: MovieDetails ) {
    const favoriteMovie = this.favoriteMovies.find( fav => movie.id === fav.id );

    if (favoriteMovie) {
      this.favoriteMovies = this.favoriteMovies.filter( fav => fav.id !== favoriteMovie.id );
    } else {
      this.favoriteMovies.push( movie );
    }

    this.storage.set('favoriteMovies', this.favoriteMovies);
  }
}
