import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Tab1Page} from '../tab1/tab1.page';
import {NavController} from '@ionic/angular';
import * as Constants from '../provider/constants';
import * as Vis from '../main/map_vis';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  chart: any;
  username: string;
  password: string;
  homeOfficeNo: any;
  homeStayNo: any;
  constructor(private http: HttpClient, public toastController: ToastController, public navCtrl: NavController) {
    this.homeStayNo = 30212;
    this.homeOfficeNo = 10231;
  }

  ngOnInit() {
    this.chart = Vis.draw('chartdiv_login');
    /*
    if (localStorage.length > 0) {
      this.presentToast('Logged in');
      this.navCtrl.navigateForward('main');
    }

     */
  }


  login() {
    this.http.post(Constants.BASE_URL + Constants.LOGIN, {
      username: this.username, password: this.password
    }).subscribe((response) => {
      let msg = '';
      if (response['success'] === 'false') {
        msg = 'Login failed';
      } else {
        msg = 'Login sucessful';
        this.chart.dispose();
        this.navCtrl.navigateForward('main');
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
