import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/news.interface';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  newsArticles: Article[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController  ) {
      this.loadFavorites();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      translucent: true,
      position: 'bottom',
      duration: 2000
    });

    toast.present();
  }

  saveFavorite(article: Article) {

    const newsExist = this.newsArticles.find( news => news.title === article.title );

    if (!newsExist) {
      this.newsArticles.unshift( article );
      this.storage.set('favorites', this.newsArticles);

      this.presentToast( 'Saved to Favorites' );
    }
  }

  async loadFavorites() {
    const favArticles = await this.storage.get('favorites');

    if (favArticles) {
      this.newsArticles = favArticles;
    }
  }

  removeFavorite(article: Article) {

    const newsExist = this.newsArticles.find( news => news.title === article.title );

    if (newsExist) {
      this.newsArticles = this.newsArticles.filter( news => news.title !== article.title );
      this.storage.set('favorites', this.newsArticles);

      this.presentToast( 'Remove from Favorites' );
    }
  }

}
