import { Injectable } from '@angular/core';
import { LogScans } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedLogScans: LogScans[] = [];

  constructor() { }

  saveLogScan( format: string, text: string ) {
    const newScan = new LogScans(format, text);

    this.savedLogScans.unshift( newScan );
  }
}
