import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss'],
})
export class MovieViewComponent implements OnInit {

  @Input() movie: Movie;
  @Input() usePoster: boolean;
  movieImg: string;
  @Output() eventEmitter = new EventEmitter();

  constructor( private modalController: ModalController ) { }

  ngOnInit() {
    if (this.usePoster) {
      this.movieImg = this.movie.poster_path;
    } else {
      this.movieImg = this.movie.backdrop_path;
    }
  }

  async showMovieDetail() {

    const currentMovie = this.movie.id;
    const movieModal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: {
        movieId: currentMovie
      }
    });

    await movieModal.present();

    await movieModal.onDidDismiss().then( x => {
      this.eventEmitter.emit();
    });

    return movieModal;
  }

}
