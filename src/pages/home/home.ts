/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T01:01:36-06:00
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http) {
  }

  ionViewWillEnter() {
     this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage, this.navParams = {userId: this.navParams.get('userId')});
  }

  getNote() {
  }

  getAllNotes() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.get('http://localhost:3000/notes/'
                  + this.navParams.get('userId'),
                  options).subscribe(res => {
                    this.notes = JSON.parse(res._body);
                    console.log(this.notes);
                  });
  }

}
