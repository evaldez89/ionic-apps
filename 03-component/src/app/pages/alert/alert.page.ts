import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title = 'Alert page';

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async alertInput() {
    const input = await this.alertCtrl.create({
      header: 'Alert Input',
      subHeader: 'This is the input example',
      message: 'This is a good message',
      inputs: [
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Insert your name',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: ( data ) => {
            if (data.txtName.length > 0) {
              this.title = data.txtName;
            }
          }
        },
      ]
    });
    return await input.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Boton OK');
          }
        },
      ]
    });
    return await alert.present();
  }
}
