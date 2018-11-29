/**
 * @Author: schwarze_falke
 * @Date:   2018-11-26T23:53:15-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-28T16:33:02-06:00
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  home = HomePage;
  username = '';
  password = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3000/signup',
                  `userName=${this.username}&pass=${this.password}`,
                  options).subscribe(res => {
                    this.navCtrl.setRoot(this.home, this.navParams = {userId: res._body});
                  });

  }

  logIn() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3000/login',
                  `userName=${this.username}&pass=${this.password}`,
                  options).map(res => {
                    if(res) {
                      this.navCtrl.setRoot(this.home, this.navParams = {userId: res._body});
                    }
                  }).subscribe();
  }
}
