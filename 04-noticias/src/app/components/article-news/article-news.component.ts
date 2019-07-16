import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/news.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-article-news',
  templateUrl: './article-news.component.html',
  styleUrls: ['./article-news.component.scss'],
})
export class ArticleNewsComponent implements OnInit {

  @Input() newsArticle: Article;
  @Input() newsIndex: number;
  @Input() inFavorite;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing,
               private localDataService: LocalDataService ) { }

  ngOnInit() {}

  openNews() {
    const browser = this.iab.create(this.newsArticle.url, '_system' );
  }

  async openShareMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            this.socialSharing.share(
              this.newsArticle.title,
              this.newsArticle.source.name,
              '',
              this.newsArticle.url
            );
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          cssClass: 'action-dark',
          handler: () => {
            this.localDataService.saveFavorite(this.newsArticle);
          }
        },
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

}
