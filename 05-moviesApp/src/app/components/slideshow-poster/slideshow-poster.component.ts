import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slidesOpt = {
    slidesPerView: 1.4,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
