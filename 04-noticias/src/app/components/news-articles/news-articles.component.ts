import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss'],
})
export class NewsArticlesComponent implements OnInit {

  @Input() newsArticles: Article[] = [];
  @Input() inFavorite = false;

  constructor() { }

  ngOnInit() {}

}
