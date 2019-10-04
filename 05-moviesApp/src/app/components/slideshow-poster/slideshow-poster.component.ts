import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent {

  @Input() movies: Movie[] = [];
  @Output() eventEmitter = new EventEmitter();

  slidesOpt = {
    slidesPerView: 2.4,
    freeMode: true
  };

  executeEmitter() {
    this.eventEmitter.emit();
  }

}
