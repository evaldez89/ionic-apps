import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories = ['sports', 'business', 'entertainment', 'general', 'health', 'science', 'technology'];
  newsArticles: Article[] = [];

  @ViewChild(IonSegment) categoriesSegment: IonSegment;

  constructor( private newsService: NoticiasService ) {}

  ngOnInit() {
    this.categoriesSegment.value = this.categories[0];
    this.loadCategoryChange();
  }

  changeCategory( event ) {
    this.categoriesSegment.value = event.detail.value;
    this.loadCategoryChange();
  }

  loadCategoryChange( ) {
    this.newsArticles = [];

    this.newsService.getHeadLinesByCategory( this.categoriesSegment.value )
    .subscribe( resp => {
      this.newsArticles.push( ...resp.articles );
    });
  }
}
