import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetails } from '../interfaces/movie.details.interface';

@Pipe({
  name: 'hasProp'
})
export class HasPropPipe implements PipeTransform {

  transform(movies: MovieDetails[], property: string): MovieDetails[] {
    return movies.filter( m => m[property]);
  }

}
