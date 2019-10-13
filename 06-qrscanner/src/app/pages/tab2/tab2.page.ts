import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LogScans } from 'src/app/models/log.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public localStorage: LocalStorageService ) { }

  sendByEmail() {

  }

  openScannedData( logScan: LogScans ) {
    this.localStorage.openScanLog(logScan);
  }

}
