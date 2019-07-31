import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseHeader } from '../interfaces/movie.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor( private http: HttpClient ) { }

  getMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<ResponseHeader>(`${environment.url}/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=${environment.apiKey}&language=es&include_image_language=es`);
  }
}
