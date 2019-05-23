import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

var config = {
  apiKey: "AIzaSyDw6ezxcyMBspsFF-G2E9qq7y0HnPYQNJA",
  authDomain: "chat-f04d7.firebaseapp.com",
  databaseURL: "https://chat-f04d7.firebaseio.com",
  projectId: "chat-f04d7",
  storageBucket: "chat-f04d7.appspot.com",
  messagingSenderId: "657849323098"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

