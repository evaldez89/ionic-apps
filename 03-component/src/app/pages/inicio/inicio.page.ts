import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuOptions } from 'src/app/interfaces/menuoptions';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  childComponents: Observable<MenuOptions[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.childComponents = this.dataService.getMenuOptions();
  }
}
