import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrayToFilter: any[], filterText: string): any[] {

    if (filterText === '') {
      return arrayToFilter;
    }

    filterText = filterText.toLowerCase();

    return arrayToFilter.filter( item => {
      return item.title.toLowerCase()
              .includes( filterText );
    });
  }

}
