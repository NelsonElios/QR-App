import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {assertNumber} from "@angular/core/src/render3/assert";

/**
 * Generated class for the InfosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infos-form',
  templateUrl: 'infos-form.html',
})
export class InfosFormPage {

  infoScanned: string = '' ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosFormPage');

  }

  ionViewWillEnter(){

    this.infoScanned = this.navParams.data;
  }

}
