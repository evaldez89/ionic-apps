import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Movie } from '../interfaces/movie.interface';
import { MovieDetails } from '../interfaces/movie.details.interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  favoriteMovies: MovieDetails[] = [];

  constructor( private storage: Storage,
               private toastController: ToastController ) { }

  async presentToast( message ) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  saveFavorite( movie: MovieDetails ) {
    const favoriteMovie = this.favoriteMovies.find( fav => movie.id === fav.id );
    let message = 'Movie removed from favorites';

    if (favoriteMovie) {
      this.favoriteMovies = this.favoriteMovies.filter( fav => fav.id !== favoriteMovie.id );
    } else {
      this.favoriteMovies.push( movie );
      message = 'Movie added to favorites';
    }

    this.storage.set('favoriteMovies', this.favoriteMovies);
    this.presentToast(message);
  }
}
