import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Since the CDN was imported in the index.html, we can assure this variable exist
// and this way we can make sure the corrector does not complain about it
declare var mapboxgl: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit, AfterViewInit {

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

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbGRlejg5IiwiYSI6ImNrMXBmeGs2MTA4NWQzbW82MzZkYmgxOTQifQ.V4eMf-oP_P88WfPZ2FblaQ';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.addControl(new mapboxgl.NavigationControl());
  }

}

// pk.eyJ1IjoiZXZhbGRlejg5IiwiYSI6ImNrMXBmeGs2MTA4NWQzbW82MzZkYmgxOTQifQ.V4eMf-oP_P88WfPZ2FblaQ