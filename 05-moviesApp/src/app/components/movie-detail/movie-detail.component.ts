import { Component, OnInit, Input } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { MovieDetails } from 'src/app/interfaces/movie.details.interface';
import { Cast } from 'src/app/interfaces/movie.credits.interface';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movieId: number;
  movieDetails: MovieDetails;
  movieActors: Cast[] = [];
  overviewLimit = 150;
  startIcon = 'star';
  movieIsFav = false;

  slidesOpt = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor( private movieService: MoviesDataService,
               public modalController: ModalController,
               private localStorage: LocalStorageService ) { }

  async ngOnInit() {

    this.setFavIcon( await this.localStorage.movieExist( this.movieId ) );

    this.movieService.getMovieDetails(this.movieId).subscribe(
      resp => {
        this.movieDetails = resp;
      }
    );

    this.movieService.getMovieCredits(this.movieId).subscribe(
      resp => {
        this.movieActors = resp.cast;
      }
    );
  }

  goBack() {
    this.modalController.dismiss();
  }
  saveFavorite() {
    const saved = this.localStorage.saveFavorite( this.movieDetails );
    this.setFavIcon(saved);
  }
  async setFavIcon( exist: boolean ) {
    this.startIcon = (exist) ? 'star' : 'star-outline';
  }

}
