/**
 * @Author: schwarze_falke
 * @Date:   2018-11-27T00:29:18-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-29T13:53:17-06:00
 */


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';

@Injectable()
export class NoteService {

  public notes = [];

  constructor(public storage: Storage) {  }

}
