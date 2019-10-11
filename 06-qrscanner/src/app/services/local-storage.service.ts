import { Injectable } from '@angular/core';
import { LogScans } from '../models/log.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedLogScans: LogScans[] = [];

  constructor( private storage: Storage ) {
    this.storage.get('scanLogs').then( res => {
      this.savedLogScans = (res) ? res : [];
    }).catch(err => {
      console.log(err);
    });
  }

  saveLogScan( format: string, text: string ) {
    const newScan = new LogScans(format, text);

    this.savedLogScans.unshift( newScan );

    this.storage.set('scanLogs', this.savedLogScans);
  }
}
