import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  messages: OSNotificationPayload[] = [];
  pushEmit = new EventEmitter<OSNotificationPayload>();
  userId: string;

  constructor( private oneSignal: OneSignal,
               private storage: Storage ) {
    this.loadMessages();
  }

  initialConfig() {
    this.oneSignal.startInit('6f1b8334-3762-47c2-b265-bef31daa8191', '277605051574');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((notification) => {
      console.log('notification received: ', notification);
      this.notificationReceived(notification);
    });

    this.oneSignal.handleNotificationOpened().subscribe( async(notification) => {
      console.log('notification opened: ', notification);
      await this.notificationReceived(notification.notification);
    });

    this.oneSignal.getIds().then(info => {
      console.log(info)
      this.userId = info.userId;
    });

    this.oneSignal.endInit();
  }

  async notificationReceived( notification: OSNotification ) {

    await this.loadMessages();

    const payload = notification.payload;

    const notificationExist = this.messages.find( m => m.notificationID == payload.notificationID);

    if (!notificationExist) {
      this.messages.unshift(payload);
      await this.saveMessages();
      this.pushEmit.emit(payload);
    }
  }

  async saveMessages() {
    await this.storage.set('messages', this.messages);
    await this.loadMessages();
  }

  async loadMessages() {
    this.messages = await this.storage.get('messages') || [];
    return this.messages;
  }

  async getMessages(){
    return [...await this.loadMessages()];
  }

  async clearMessages() {
    await this.storage.remove('messages');
    this.messages = [];
    await this.saveMessages();
  }
}
