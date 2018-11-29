/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T16:23:08-06:00
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NoteService } from '../../providers/note-service/note-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              public noteService: NoteService) {
  }

  ionViewDidLoad() {
    this.getAllNotes();
  }

  addNote(){
    this.userId = this.navParams.get('userId')
    this.navCtrl.setRoot(AddNotePage, this.navParams = { userId: this.userId });
  }

  getNote(note) {
    this.userId = this.navParams.get('userId')
    this.navCtrl.setRoot(ViewNotePage, this.navParams = { note: note, userId: this.userId });
  }

  async getAllNotes() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    await this.http.get('http://localhost:3000/notes/'
                  + this.navParams.get('userId'),
                  options).subscribe(res => {
                    this.noteService.notes = JSON.parse(res._body);
                  });
  }

}
