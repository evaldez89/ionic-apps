import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories = ['sports', 'business', 'entertainment', 'general', 'health', 'science', 'technology'];

  @ViewChild(IonSegment) categoriesSegment: IonSegment;

  constructor() {}

  ngOnInit() {
    this.categoriesSegment.value = this.categories[0];
  }

}
