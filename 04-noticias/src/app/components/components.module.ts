import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { ArticleNewsComponent } from './article-news/article-news.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewsArticlesComponent, ArticleNewsComponent],
  exports: [
    NewsArticlesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
