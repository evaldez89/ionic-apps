import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/news.interface';


@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  newsArticles: Article[] = [];

  constructor( private storage: Storage ) { }

  saveFavorite(article: Article) {

    const newsExist = this.newsArticles.find( news => news.title === article.title );

    if (!newsExist) {
      this.newsArticles.unshift( article );
      this.storage.set('favorites', this.newsArticles);
    }
  }

  async loadFavorites() {
    const favArticles = await this.storage.get('favorites');
    this.newsArticles = favArticles;
  }

}
