import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor( private http: HttpClient ) { }

  getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/550?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=d9119019bc0a832f1b4ca505f912bc35&language=es&include_image_language=es`);
  }
}
