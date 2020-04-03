import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async logoutAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('logout');
          }
        }, {
          text: 'Logout',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async deactivateAlert() {
    const alert = await this.alertController.create({
      header: 'Deactivate Account',
      message: 'Your account will be deactivated and other users can not view your profile',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('logout');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async privacyAlert() {
    const alert = await this.alertController.create({
      header: 'Private Account',
      message: 'Your account is hidden for other users',
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
