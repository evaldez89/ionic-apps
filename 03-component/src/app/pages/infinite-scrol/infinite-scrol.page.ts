import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrol',
  templateUrl: './infinite-scrol.page.html',
  styleUrls: ['./infinite-scrol.page.scss'],
})
export class InfiniteScrolPage implements OnInit {

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('cargando los siguientes...');

    setTimeout(() => {

      if ( this.data.length > 50 ) {
        event.target.complete();
        return;
      }

      const newData = Array(20);
      this.data.push( ...newData );

      event.target.complete();
    }, 1000);
  }

}
