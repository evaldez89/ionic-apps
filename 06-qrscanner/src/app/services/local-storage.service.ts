import { Injectable } from '@angular/core';
import { LogScans } from '../models/log.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedLogScans: LogScans[] = [];

  constructor( private storage: Storage,
               private navCtrl: NavController,
               private iab: InAppBrowser,
               private file: File,
               private emailComposer: EmailComposer ) {
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
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/map/${ scanLog.text }`);
        break;
      default:
        this.iab.create(scanLog.text, '_system');
        break;
    }
  }

  async sendEmail() {
    const lines = [];

    lines.push('Tipo,Formato,Fecha Creación,Texto\n');

    this.savedLogScans.forEach(log => {
      const line = `${log.type},${log.format},${log.created},${log.text.replace(',', ' ')}\n`;
      lines.push(line);
    });

    if (this.createFile(lines.join(''))) {
      const email = {
        to: 'evaldez.cnt@gmail.com',
        attachments: [
          `${this.file.dataDirectory}scanned_records.csv`
        ],
        subject: 'Scanned Records',
        body: 'This is the scanned records from your app.',
        isHtml: true
      };

      this.emailComposer.open(email);
    }
  }

  async createFile(data: string) {
    let result = false;

    await this.file.createFile(this.file.dataDirectory, 'scanned_records.csv', true)
      .then( created => {
        this.file.writeExistingFile(this.file.dataDirectory, 'scanned_records.csv', data)
          .then( writed => { result = true; })
          .catch( error => { console.log(error); });
      })
      .catch( error => { console.log(error); });

    return result;
  }
}
