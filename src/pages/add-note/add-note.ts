/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T17:59:39-06:00
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  home = HomePage;
  date = '';
  title = '';
  content = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private NoteService: NoteService,
              private http: Http) {
  }

  saveNote() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3000/create',
                  `title=${this.title}&date=${this.date}&body=${this.content}&userId=${this.navParams.get('userId')}`,
                  options).subscribe(res => {
                    this.navCtrl.setRoot(this.home, this.navParams = {userId: this.navParams.get('userId')});
                  });
  }
}
