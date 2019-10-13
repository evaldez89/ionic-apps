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

  async saveScanLog( format: string, text: string ) {
    await this.loadStorage();

    const newScan = new LogScans(format, text);

    this.savedLogScans.unshift( newScan );

    this.storage.set('scanLogs', this.savedLogScans);

    this.navCtrl.navigateForward('/tabs/tab2');

    this.openScanLog(newScan);

  }

  openScanLog( scanLog: LogScans ) {
    switch (scanLog.type) {
      case 'http':
        this.iab.create(scanLog.text, '_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/map/${ scanLog.text }`);
        break;
      default:
        // this.iab.create(scanLog.text, '_system');
        break;
    }
  }
}
