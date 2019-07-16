import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slideOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  newsArticles: Article[] = [];

  constructor( public localDataService: LocalDataService ) {}

}
