/**
 * @Author: schwarze_falke
 * @Date:   2018-11-26T23:53:15-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T18:19:04-06:00
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
              public alert: AlertController,
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
                    if(res._body === 'false') {
                      let alert = this.alert.create({
                        title: '¡El usuario ya existe!',
                        subTitle: 'Al parecer ese usuario ya está en uso. Intente con otro.',
                        buttons: ['Intentar de nuevo']
                      });
                      alert.present();
                    } else {
                      this.navCtrl.setRoot(this.home, this.navParams = {userId: res._body});
                    }
                  });

  }

  logIn() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3000/login',
                  `userName=${this.username}&pass=${this.password}`,
                  options).map(res => {
                    if(res._body === 'false') {
                      let alert = this.alert.create({
                        title: 'Error de Inicio de Sesión',
                        subTitle: 'Datos erróneos. Por favor intente de nuevo (¿ya se ha registrado?)',
                        buttons: ['Intentar de nuevo']
                      });
                      alert.present();
                    } else {
                      this.navCtrl.setRoot(this.home, this.navParams = {userId: res._body});
                    }
                  }).subscribe();
  }
}
