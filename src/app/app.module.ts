import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


const firebaseConfig = {
  apiKey: "AIzaSyA9UYMPDqVqA8S_LJR3eWo2C7NQVas0mnw",
  authDomain: "ionic-template-pipeline.firebaseapp.com",
  databaseURL: "https://ionic-template-pipeline.firebaseio.com",
  projectId: "ionic-template-pipeline",
  storageBucket: "ionic-template-pipeline.appspot.com",
  messagingSenderId: "582009042595"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
