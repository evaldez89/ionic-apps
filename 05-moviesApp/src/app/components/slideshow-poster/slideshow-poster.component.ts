import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slidesOpt = {
    slidesPerView: 2.4,
    freeMode: true
  };

  constructor( public modalController: ModalController ) { }

  ngOnInit() {}

  async showMovieDetail( movie: Movie ) {
    const movieModal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: {
        movie
      }
    });

    await movieModal.present();

    return movieModal;
  }

}
