/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-28T21:28:04-06:00
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private NoteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    })
  }

  saveNote(note: Note) {
    this.NoteService.saveNote(note);
    this.navCtrl.pop();
  }
}
