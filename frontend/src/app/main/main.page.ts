import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as Vis from './map_vis';
import {NavController} from "@ionic/angular";
import { AlertController} from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild('lineChart', null) lineChart;
  @ViewChild('pieChart', null) pieChart;
  @ViewChild('homeStay', null) homeStay;
  @ViewChild('homeOffice', null) homeOffice;


  finish = "Du hast das erledigt. Hol jetzt deine Punkte ab!"

  homeOfficeButtonColor = 'warning';
  chart: any;
  state: any; // flags for displaying according page: 1: stats, 2: social, 3: profile
  hide1: boolean;
  hide2: boolean;
  hide3: boolean;
  btnDisabled: boolean;

  hideSport: boolean;
  hideSportChallenges: boolean;
  hideSportFeed: boolean;
  hideSportFeed2: boolean;
  hideCommentOnSportFeed2: boolean;
  newComment: string;
  newCommentDisplay: string;

  homeStayNo: any;
  homeOfficeNo: any;

  userScore: number;
  social: boolean;
  eldery: boolean;
  homeless: boolean;

  pie: any;
  line: any;
  colorArray: any;
  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, private animationCtrl: AnimationController) {
    this.userScore = 1980
    this.homeStayNo = 30212;
    this.homeOfficeNo = 10231;
    this.btnDisabled = false;
    this.hide1 = false;
    this.hide2 = true;
    this.hide3 = true;
    this.hideSport = true;
    this.hideSportChallenges = true;
    this.hideSportFeed = true;
    this.hideSportFeed2 = true;
    this.social = true;
    this.eldery = true;
    this.homeless = true;
    this.hideCommentOnSportFeed2 = true;
    this.newComment = '';
    this.newCommentDisplay = '';
  }


  ngOnInit(): void {
  }

  ionViewWillLeave() {
    this.chart.dispose();
  }

  ionViewDidEnter() {
    this.chart = Vis.draw('chartdiv');
    this.createLineChart();
    this.createPieChart();
    this.presentToast();
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  incrementHomeOffice() {
    this.homeOfficeNo++;
    this.btnDisabled = true;
    this.homeOfficeButtonColor = 'medium';
  }

  incrementHomeStay() {
    this.homeStayNo++;
    this.btnDisabled = true;
  }

  createPieChart() {
    this.generateColorArray(4);
    this.pie = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Informationen geteilt', 'Senioren geholfen', 'Engagement', 'Bedürftigen geholfen'],
        datasets: [{
          label: 'Viewers in millions',
          data: [540, 780, 1080, 600],
          backgroundColor: this.colorArray,
          borderColor: this.colorArray,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createLineChart() {
    this.line = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['KW6', 'KW7', 'KW8', 'KW9', 'KW10', 'KW11', 'KW12'],
        datasets: [{
          label: '#StayHome Tage pro Woche',
          data: [3, 0, 0, 1, 1, 3, 6],
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Du kannst Punkte abholen!",
      duration: 2000
    });
    toast.present();
  }

  showStats() {
    window.location.reload();
    if (this.state !== 1) {
      this.state = 1;
      this.hideAll();
      this.hide1 = false;
    }
  }

  showSocial() {
    if (this.state !== 2) {
      this.state = 2;
      this.hideAll();
      this.hide2 = false;

    }
  }

  showRanking() {
    if (this.state !== 3) {
      this.state = 3;
      this.hideAll();
      this.hide3 = false;
    }
  }

  showSports() {
    this.state = 0;
    this.hideAll();
    this.hideSport = false;
  }

  showChallenges() {
    this.state = 0;
    this.hideAll();
    this.hideSportChallenges = false;
  }

  showSportFeed() {
    this.state = 0;
    this.hideAll();
    this.hideSportFeed = false;
  }

  showSportFeed2() {
    this.state = 0;
    this.hideAll();
    this.hideSportFeed2 = false;
  }

  showNewCommentOnSportFeed2() {
    this.state = 0;
    this.hideAll();
    this.hideSportFeed2 = false;
    this.hideCommentOnSportFeed2 = false;
    this.newCommentDisplay = this.newComment;
    this.newComment = '';
  }

  showSocialCommitment() {
    this.state = 0;
    this.hideAll();
    this.social = false;
  }

  showElderly() {
    this.state = 0;
    this.hideAll();
    this.eldery = false;
  }

  showHomeless() {
    this.state = 0;
    this.hideAll();
    this.homeless = false;
  }

  hideAll() {
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    this.hideSport = true;
    this.hideSportChallenges = true;
    this.hideSportFeed = true;
    this.social = true;
    this.eldery = true;
    this.homeless = true;
    this.hideSportFeed = true;
    this.hideSportFeed2 = true;
  }

  logout()  {
    this.navCtrl.navigateForward('login');
  }

  async getCredits() {
    this.finish = "";
    const alert = await this.alertController.create({
      header: 'Super!',
      message: 'Danke und mach weiter so!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            let tmp = this.userScore + 65;
            let interval = setInterval(() => {
              this.userScore++;
              if (this.userScore === tmp) {
                clearInterval(interval);
              }
            },30);
          }
        }
      ]
    });

    await alert.present();
  }

  async buy(price) {
    const alert = await this.alertController.create({
      header: 'Bist du dir sicher?',
      message: 'Willst du für ' + price + 'P. diese Prämie eintauschen?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.presentAlert();
            let tmp = this.userScore - 500;
            let interval = setInterval(() => {
              this.userScore--;
              if (this.userScore === tmp) {
                clearInterval(interval);
              }
            },10);
          }
        },
        {
          text: "Nein",
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viel Spaß!',
      message: 'Du solltest bald eine E-Mail erhalten.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

