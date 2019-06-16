import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  userList: Observable<any>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.userList = this.dataService.getUsers();
  }

  delete( user ) {
    console.log('delete', user );
  }

  favorite( user ) {
    console.log('favorite', user );
  }

  archive( user ) {
    console.log('archive', user );
  }
}
