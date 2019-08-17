import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slidesOpt = {
    slidesPerView: 1.4,
    freeMode: true
  };

  constructor( private modalController: ModalController ) { }

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
