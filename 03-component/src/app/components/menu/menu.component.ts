import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { MenuOptions } from 'src/app/interfaces/menuoptions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOptions: Observable<MenuOptions[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.menuOptions = this.dataService.getMenuOptions();
  }

}
