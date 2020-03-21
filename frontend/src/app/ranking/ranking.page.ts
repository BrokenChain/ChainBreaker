import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Constants from "../provider/constants";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  showRanking() {
    this.http.get(Constants.BASE_URL + Constants.TABLE, {})
        .subscribe((response) => {
          let msg = '';
          if (response['success'] === 'false') {
            msg = 'Could not load ranking';
          } else {
            //let names: string[]  = ['KP', 'natascha', 'andi', 'duciwuci', 'mario', 'maix2', 'julia'];
          }
        });
  }

}
