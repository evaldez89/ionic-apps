import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor( private oneSignal: OneSignal ) { }

  initialConfig() {
    this.oneSignal.startInit('6f1b8334-3762-47c2-b265-bef31daa8191', '277605051574');

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
