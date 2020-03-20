import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  state = 'Bayern';
  email = 'test@test.test';
  constructor(private http: HttpClient) {  }

  ngOnInit() {
  }

  login() {
    this.http.post('localhost:5000/login', {
      content: {
        username: this.username, password: this.password,  email: this.email, state: this.state
      }
    }).subscribe((response) => {
      console.log(response);
    });
  }
}
