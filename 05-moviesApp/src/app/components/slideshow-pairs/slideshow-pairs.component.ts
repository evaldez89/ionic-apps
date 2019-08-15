import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

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

  constructor() { }

  ngOnInit() {}

  nextMovies() {
    this.loadNextPage.emit();
  }

}
