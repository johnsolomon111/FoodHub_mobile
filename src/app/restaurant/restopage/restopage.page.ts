import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restopage',
  templateUrl: './restopage.page.html',
  styleUrls: ['./restopage.page.scss'],
})
export class RestopagePage implements OnInit {

  constructor(public alertController: AlertController) { }
  async reservationAlert() {
    const alert = await this.alertController.create({
      header: 'Add Reservation',
      inputs: [
        // input date with min & max
        {
          name: 'Date',
          type: 'date'
        },
        {
          name: 'Time',
          type: 'time'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
