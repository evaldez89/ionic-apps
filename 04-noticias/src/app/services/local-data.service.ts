import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor( private storage: Storage ) { }
}
