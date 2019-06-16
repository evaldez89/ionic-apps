import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  userList: Observable<any>;

  @ViewChild('contactList') contactList: IonList;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.userList = this.dataService.getUsers();
  }

  delete( user ) {
    console.log('delete', user );
  }

  favorite( user ) {
    console.log('favorite', user );
    this.contactList.closeSlidingItems();
  }

  archive( user ) {
    console.log('archive', user );
  }
}
