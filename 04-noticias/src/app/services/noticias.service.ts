import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getToHeadLines() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5c0cb46560344e3db2e61c647c977357`);
  }
}
