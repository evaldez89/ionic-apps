import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopHeadLinesResponse } from '../interfaces/news.interface';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLinesPage = 0;

  constructor( private http: HttpClient ) { }

  private executeQuery<T>( query: string ) {
    return this.http.get<T>(`${apiUrl}${query}`, { headers });
  }

  getToHeadLines() {
    return this.executeQuery<TopHeadLinesResponse>(`/top-headlines?country=us&page=${++this.headLinesPage}`);
  }

  getHeadLinesByCategory( category: string ) {
    return this.executeQuery<TopHeadLinesResponse>(`/top-headlines?country=us&category=${category}`);
  }
}
