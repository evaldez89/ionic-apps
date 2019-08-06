import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseHeader } from '../interfaces/movie.interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor( private http: HttpClient ) { }

  private contructApiQuery<T>( query: string, lang) {
    query = BASE_URL + query;
    query += `&api_key=${ API_KEY }&language=${ lang }&include_image_language=${ lang }`;

    return this.http.get<T>(query);
  }

  getMovies(initialDate: string, finalDate: string, lang: string) {
    const baseQuery = `/discover/movie?primary_release_date.gte=${ initialDate }&primary_release_date.lte=${ finalDate }`;
    return this.contructApiQuery<ResponseHeader>(baseQuery, lang);
  }
}
