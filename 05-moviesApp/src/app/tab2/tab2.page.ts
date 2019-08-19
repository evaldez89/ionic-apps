import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText = '';
  suggestedMovies = ['Batman: El caballero de la noche', 'Click', 'Transformers']

  constructor( ) {}

  searchMovie( event ) {
    const value = event.detail.value;
    console.log(value);
  }
}
