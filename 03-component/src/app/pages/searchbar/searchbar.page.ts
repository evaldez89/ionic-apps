import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      console.log(albums);
      this.albums = albums;
    });
  }

  search( event ) {
    console.log(event);
  }

}
