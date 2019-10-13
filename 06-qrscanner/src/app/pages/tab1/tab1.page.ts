import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slidesOpt = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor( private barcodeScanner: BarcodeScanner,
               private localStorage: LocalStorageService ) {}

  ionViewDidEnter() {

  }

  ionViewWillEnter() {
    this.scanCode();
  }

  ionViewDidLeave() {

  }

  ionViewWillLive() {

  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {

      if (!barcodeData.cancelled) {
        this.localStorage.saveScanLog(barcodeData.format, barcodeData.text);
      }

     }).catch(err => {
        this.localStorage.saveScanLog('geo:', 'geo:40.752327640569696,-74.34377088984377');
        console.log(err);
     });
  }

}
