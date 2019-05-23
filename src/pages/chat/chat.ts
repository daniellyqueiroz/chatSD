import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { ListaChatPage } from '../lista-chat/lista-chat';
import { HomePage } from '../home/home';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  verificar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.ref); 
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  addRoom() {
    this.navCtrl.push(ListaChatPage);
  }

  joinRoom(key) {
    console.log(key);

    this.verificar = true

    this.navCtrl.setRoot(HomePage, {
      key:key,
      nickname:this.navParams.get("nickname")
    });
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
