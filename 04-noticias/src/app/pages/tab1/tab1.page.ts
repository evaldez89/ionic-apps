import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  newsArticles: Article[] = [];

  constructor( private newsService: NoticiasService ) {}

  ngOnInit() {
    this.newsService.getToHeadLines()
    .subscribe( resp => {
      this.newsArticles.push( ...resp.articles );
    });
  }

}
