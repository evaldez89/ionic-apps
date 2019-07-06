import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  userList: Observable<any>;

  @ViewChild('contactList') contactList: IonList;

  constructor( private dataService: DataService,
               private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.userList = this.dataService.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  delete( user ) {
    this.presentToast(`delete user: ${user.name}`);
    this.contactList.closeSlidingItems();
  }

  favorite( user ) {
    this.presentToast(`favorite user: ${user.name}`);
    this.contactList.closeSlidingItems();
  }

  archive( user ) {
    this.presentToast(`archive user: ${user.name}`);
    this.contactList.closeSlidingItems();
  }
}
