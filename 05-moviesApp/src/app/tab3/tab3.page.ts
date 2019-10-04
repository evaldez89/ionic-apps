import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../interfaces/movie.details.interface';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  favoriteMovies: MovieDetails[] = [];

  constructor( private localData: LocalStorageService ) {}

  async ngOnInit() {
    this.favoriteMovies = await this.localData.loadFavorites();
  }

}
