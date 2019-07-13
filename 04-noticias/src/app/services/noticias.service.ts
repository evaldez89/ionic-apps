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

  constructor( private http: HttpClient ) { }

  private executeQuery( query: string ) {
    return this.http.get<TopHeadLinesResponse>(`${apiUrl}${query}`, { headers });
  }

  getToHeadLines() {
    return this.executeQuery('/top-headlines?country=us');
  }
}
