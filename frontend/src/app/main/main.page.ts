import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as Vis from './map_vis';

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

  state: any; // flags for displaying according page: 1: stats, 2: social, 3: profile
  hide1: boolean;
  hide2: boolean;
  hide3: boolean;
  btnDisabled: boolean;

  homeStayNo: any;
  homeOfficeNo: any;

  pie: any;
  line: any;
  colorArray: any;
  constructor() {
    this.homeStayNo = 30212;
    this.homeOfficeNo = 10231;
    this.btnDisabled = false;
    this.hide1 = false;
    this.hide2 = true;
    this.hide3 = true;
  }

  ngOnInit() { Vis.draw(); }

  ionViewDidEnter() {
    this.createLineChart();
    this.createPieChart();
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
          label: 'Days of Social Distancing per week',
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

  showStats() {
    window.location.reload();
    if (this.state !== 1) {
      this.state = 1;
      this.hide1 = false;
      this.hide2 = true;
      this.hide3 = true;
    }
  }

  showSocial() {
    if (this.state !== 2) {
      this.state = 2;
      this.hide1 = true;
      this.hide2 = false;
      this.hide3 = true;
    }
  }

  showRanking() {
    if (this.state !== 3) {
      this.state = 3;
      this.hide1 = true;
      this.hide2 = true;
      this.hide3 = false;
    }
  }
}
