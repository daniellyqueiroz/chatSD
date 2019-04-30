
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-lista-chat',
  templateUrl: 'lista-chat.html',
})

export class ListaChatPage {

  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.ref); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addRoom() {
    let newData = this.ref.push();
    newData.set({
      roomname:this.data.roomname
    });
    this.navCtrl.pop();
  }

}
