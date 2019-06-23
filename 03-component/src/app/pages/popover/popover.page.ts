import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popOverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async showPop() {
    const popover = await this.popOverCtrl.create({
      component: PopinfoComponent,
    });

    await popover.present();
  }

}
