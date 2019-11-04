import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor( private oneSignal: OneSignal ) { }

  initialConfig() {
    this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((notification) => {
      console.log('notification received: ', notification);
    });

    this.oneSignal.handleNotificationOpened().subscribe((notification) => {
      console.log('notification opened: ', notification);
    });

    this.oneSignal.endInit();
  }
}
