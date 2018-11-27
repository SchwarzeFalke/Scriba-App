/**
 * @Author: schwarze_falke
 * @Date:   2018-11-26T23:26:10-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-27T00:00:01-06:00
 */



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService
  ]
})
export class AppModule {}
