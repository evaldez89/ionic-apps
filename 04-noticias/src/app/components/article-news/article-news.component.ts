import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-article-news',
  templateUrl: './article-news.component.html',
  styleUrls: ['./article-news.component.scss'],
})
export class ArticleNewsComponent implements OnInit {

  @Input() newsArticle: Article;
  @Input() newsIndex: number;

  constructor() { }

  ngOnInit() {}

}
