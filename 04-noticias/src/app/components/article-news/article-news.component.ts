import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/news.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-article-news',
  templateUrl: './article-news.component.html',
  styleUrls: ['./article-news.component.scss'],
})
export class ArticleNewsComponent implements OnInit {

  @Input() newsArticle: Article;
  @Input() newsIndex: number;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController ) { }

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
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
