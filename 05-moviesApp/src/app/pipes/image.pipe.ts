import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL_IMAGE = environment.imgPath;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/no-image-banner.png';
    }

    return `${ URL_IMAGE }${ size }${ img }`;
  }
}
