import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {assertNumber} from "@angular/core/src/render3/assert";
import {FormBuilder, FormGroup, Validator} from "@angular/forms";

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

  //form: FormGroup;
  infoScanned: string ;
  informations: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, /*private formBuilder: FormBuilder*/) {
  }

  ionViewDidLoad() {
    //this.initForm();
    console.log('ionViewDidLoad InfosFormPage');

    this.infoScanned = this.navParams.get('data');

    this.informations = this.infoScanned;

  }

  ionViewWillEnter() {

  }




}
