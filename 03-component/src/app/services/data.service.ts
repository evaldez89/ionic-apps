import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuOptions } from '../interfaces/menuoptions';

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
}
