/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T16:27:37-06:00
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  home: HomePage;
  note: Note;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public noteService: NoteService) {
      this.note = this.navParams.get('note');
      this.text = 'Eliminar Nota';
      this.color = 'danger';
      this.isenabled = false;
  }

  deleteNote(id: number, userId: number) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    this.http.get('http://localhost:3000/delete/'
                  + id, options).subscribe(res => {
                    this.http.get('http://localhost:3000/notes/'
                    + this.navParams.get('userId'),
                    options).subscribe(res => {
                      this.noteService.notes = JSON.parse(res._body);
                      this.text = '¡Hecho!';
                      this.color = 'green';
                      this.isenabled = true;
                      this.navCtrl.pop(this.navParams = { userId: this.navParams.get('userId') });
                    });
                  });
  }
}
