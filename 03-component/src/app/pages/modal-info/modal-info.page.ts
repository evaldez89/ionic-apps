import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor( private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  exit(withArgs: boolean) {
    if (withArgs) {
      console.log('with arguments');
    } else {
      console.log('with no arguments');
    }
    this.modalCrtl.dismiss();
  }

}
