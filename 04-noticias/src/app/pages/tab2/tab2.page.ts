import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  categories = [
    'sports',
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'technology'
  ];
  newsArticles: Article[] = [];

  @ViewChild(IonSegment) categoriesSegment: IonSegment;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private newsService: NoticiasService) {}

  ngOnInit() {
    this.categoriesSegment.value = this.categories[0];
    this.loadCategoryChange();
  }

  changeCategory(event) {
    this.categoriesSegment.value = event.detail.value;
    this.loadCategoryChange();
  }

  loadCategoryChange(event?) {
    this.newsArticles = [];
    this.loadNewsData();
  }

  loadNewsData(event?) {
    this.newsService
      .getHeadLinesByCategory(this.categoriesSegment.value)
      .subscribe(resp => {
        if (resp.articles.length > 0) {
          this.newsArticles.push(...resp.articles);

          if (event) {
            event.target.complete();
          }
        } else {
          this.infiniteScroll.disabled = true;
        }
      });
  }
}
