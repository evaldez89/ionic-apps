import { Pipe, PipeTransform } from '@angular/core';

const URL_IMAGE = 'https://image.tmdb.org/t/p/';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return;
    }

    return `${ URL_IMAGE }${ size }/${ img }`;
  }
}
