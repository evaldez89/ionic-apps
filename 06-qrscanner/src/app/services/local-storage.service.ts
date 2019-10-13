import { Injectable } from '@angular/core';
import { LogScans } from '../models/log.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedLogScans: LogScans[] = [];

  constructor( private storage: Storage,
               private navCtrl: NavController,
               private iab: InAppBrowser ) {
    this.loadStorage();
  }

  async loadStorage() {
    this.savedLogScans = await this.storage.get('scanLogs') || [];
  }

  async saveLogScan( format: string, text: string ) {
    await this.loadStorage();

    const newScan = new LogScans(format, text);

    this.savedLogScans.unshift( newScan );

    this.storage.set('scanLogs', this.savedLogScans);

    this.openScannedValue(newScan);

    this.iab.create(newScan.text, '_system');
  }

  openScannedValue( scan: LogScans ) {
    this.navCtrl.navigateForward('/tabs/tab2');
    console.log('the type: ', scan.type);
    switch (scan.type) {
      case 'http':
        this.iab.create(scan.text, '_system');
        break;
      // case 'globe':
      //   this.openValue(scan.type);
      //   break;
      default:
        this.iab.create(scan.text, '_system');
        break;
    }
  }
}
