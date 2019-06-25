import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuOptions } from '../interfaces/menuoptions';
import { Hero } from '../interfaces/heroe';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<MenuOptions[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('http://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<Hero[]>('/assets/data/superheroes.json').pipe(
      delay(3500)
    );
  }
}
