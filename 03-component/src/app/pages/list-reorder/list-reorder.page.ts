import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heores = ['Acuaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash', 'Robin'];

  constructor() { }

  ngOnInit() {
  }

  reorderEvent( event ) {
    console.log(event);

    const movedItem = this.heores.splice( event.detail.from, 1)[0];
    this.heores.splice(event.detail.to, 0, movedItem);

    event.detail.complete();
  }

  saveOrder(){
    console.log(this.heores);
  }

}
