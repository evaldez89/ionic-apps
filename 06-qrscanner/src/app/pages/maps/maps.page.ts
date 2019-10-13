import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  latitude: number;
  longitud: number;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    let geo = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    this.latitude = Number(geo.split(',')[0]);
    this.longitud = Number(geo.split(',')[1]);
  }

}
