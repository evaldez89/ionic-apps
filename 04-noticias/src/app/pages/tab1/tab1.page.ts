import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/news.interface';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  newsArticles: Article[] = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor( private newsService: NoticiasService ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNewsData(event) {
    this.loadNews(event);
  }

  loadNews(event?) {
    this.newsService.getToHeadLines()
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
