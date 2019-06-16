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
    event.detail.complete();
  }

}
