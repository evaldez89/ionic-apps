import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadNextPage = new EventEmitter();

  slidesOpt = {
    slidesPerView: 2.4,
    freeMode: true
  };

  constructor( public modalController: ModalController ) { }

  ngOnInit() {}

  nextMovies() {
    this.loadNextPage.emit();
  }

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
