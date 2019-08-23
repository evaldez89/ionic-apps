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
    this.favoriteMovies.push( movie );
    this.storage.set('favoriteMovies', this.favoriteMovies);
  }
}
