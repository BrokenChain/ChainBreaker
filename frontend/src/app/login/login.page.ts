import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Tab1Page} from '../tab1/tab1.page';
import {NavController} from '@ionic/angular';
import * as Constants from '../provider/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  constructor(private http: HttpClient, public toastController: ToastController, public navCtrl: NavController) {  }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.presentToast("Logged in");
      this.navCtrl.navigateForward('tabs');
    }
  }

  login() {
    this.http.post(Constants.BASE_URL + Constants.LOGIN, {
      username: this.username, password: this.password
    }).subscribe((response) => {
      let msg = '';
      if (response['success'] == 'false') {
        msg = 'Login failed';
      } else {
        msg = 'Login sucessful';
        localStorage['username'] = this.username;
        this.navCtrl.navigateForward('tabs');
      }

      this.presentToast(msg);
    });
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
