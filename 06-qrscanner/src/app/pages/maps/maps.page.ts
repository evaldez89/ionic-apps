import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Since the CDN was imported in the index.html, we can assure this variable exist
// and this way we can make sure the corrector does not complain about it
declare var mapboxgl: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss']
})
export class MapsPage implements OnInit, AfterViewInit {
  latitude: number;
  longitud: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let geo = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    const args = geo.split(',');
    this.latitude = Number(args[0]);
    this.longitud = Number(args[1]);
  }

  ngAfterViewInit() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZXZhbGRlejg5IiwiYSI6ImNrMXBmeGs2MTA4NWQzbW82MzZkYmgxOTQifQ.V4eMf-oP_P88WfPZ2FblaQ';

    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.longitud, this.latitude],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.addControl(new mapboxgl.NavigationControl());
  }
}
