import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.page.html',
  styleUrls: ['./greeter.page.scss'],
})
export class GreeterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  openLoginPage() {
    this.navCtrl.navigateForward('login');
  }

  openRegisterPage() {
    console.log('clicked Register!');
  }

}
