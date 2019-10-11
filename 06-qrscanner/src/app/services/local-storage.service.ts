import { Injectable } from '@angular/core';
import { LogScans } from '../models/log.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedLogScans: LogScans[] = [];

  constructor( private storage: Storage ) {
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
  }
}
