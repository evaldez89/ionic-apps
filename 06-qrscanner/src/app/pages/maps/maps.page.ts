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
    const args = geo.split(',');
    this.latitude = Number(args[0]);
    this.longitud = Number(args[1]);
  }

}

// pk.eyJ1IjoiZXZhbGRlejg5IiwiYSI6ImNrMXBmeGs2MTA4NWQzbW82MzZkYmgxOTQifQ.V4eMf-oP_P88WfPZ2FblaQ