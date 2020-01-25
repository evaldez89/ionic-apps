import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from '../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  messages: OSNotificationPayload[] = [];

  constructor( public pushService: PushService,
               private appRef: ApplicationRef ) {}

  ngOnInit() {

    this.pushService.pushEmit.subscribe(push => {
      this.messages.unshift(push);
      this.appRef.tick();
    });

  }

  async ionViewWillEnter(){
    this.messages = await this.pushService.getMessages();
    console.log(this.messages[0].additionalData)
  }

}
