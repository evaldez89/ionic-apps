import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseHeader } from '../interfaces/movie.interface';
import { environment } from 'src/environments/environment';
import { MovieDetails, MovieDetailResponse } from '../interfaces/movie.details.interface';
import { MovieCredits } from '../interfaces/movie.credits.interface';

const BASE_URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  private popularMoviesPage = 0;

  constructor( private http: HttpClient ) { }

  private constructApiQuery<T>( query: string, lang) {
    query = BASE_URL + query;
    query += `&api_key=${ API_KEY }&language=${ lang }&include_image_language=${ lang }`;

    return this.http.get<T>(query);
  }

  getMovies(initialDate: string, finalDate: string, lang: string) {
    const baseQuery = `/discover/movie?primary_release_date.gte=${ initialDate }&primary_release_date.lte=${ finalDate }`;
    return this.constructApiQuery<ResponseHeader>(baseQuery, lang);
  }

  getPopular(lang = 'es') {
    const query = `/discover/movie?sort_by=popularity.desc&page=${ ++this.popularMoviesPage }`;

    return this.constructApiQuery<ResponseHeader>(query, lang);
  }

  getMovieDetails( movieId: number, lang = 'es' ) {
    return this.constructApiQuery<MovieDetails>(`/movie/${ movieId }?a=1`, lang);
  }

  getMovieCredits( movieId: number, lang = 'es' ) {
    return this.constructApiQuery<MovieCredits>(`/movie/${ movieId }/credits?a=1`, lang);
  }

  searchMovie( searchTerm: string, lang = 'es' ) {
    return this.constructApiQuery<MovieDetailResponse>(`/search/movie?query=${ searchTerm }`, lang);
  }
}
