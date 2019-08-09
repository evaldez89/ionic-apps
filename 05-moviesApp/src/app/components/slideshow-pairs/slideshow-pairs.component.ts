import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slidesOpt = {
    slidesPerView: 2.4,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
