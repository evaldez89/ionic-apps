import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuOptions } from 'src/app/interfaces/menuoptions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  childComponents: MenuOptions[] = [];

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }
}
