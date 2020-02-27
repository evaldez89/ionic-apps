import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/news.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-article-news',
  templateUrl: './article-news.component.html',
  styleUrls: ['./article-news.component.scss'],
})
export class ArticleNewsComponent implements OnInit {

 

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing,
               private localDataService: LocalDataService,
               private platform: Platform ) { }

  ngOnInit() {}

  openNews() {
    const browser = this.iab.create(this.newsArticle.url, '_system' );
  }

  async openShareMenu() {

    let favButton = {
      text: 'Favorite',
      icon: 'heart',
      cssClass: 'action-dark',
      handler: () => {
        this.localDataService.saveFavorite(this.newsArticle);
      }
    };

    if (this.inFavorite) {
      favButton = {
        text: 'Remove Favorite',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.localDataService.removeFavorite(this.newsArticle);
        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.shareArticle();
          }
        },
        favButton,
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  shareArticle() {

    if (this.platform.is('cordova')) {
      this.socialSharing.share(
        this.newsArticle.title,
        this.newsArticle.source.name,
        '',
        this.newsArticle.url
      );
    } else {

      if (navigator['share']) {
        navigator['share']({
            title: this.newsArticle.title,
            text: this.newsArticle.source.name,
            url: this.newsArticle.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('Can not share the article using this browser');
      }

    }
  }

}
