import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrayToFilter: any[], filterText: string): any[] {

    console.log(arrayToFilter);

    return arrayToFilter;
  }

}
