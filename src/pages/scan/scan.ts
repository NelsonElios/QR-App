import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {InfosFormPage} from "../infos-form/infos-form";

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  scanInfo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barScan: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scan() {
      this.barScan.scan().then(
        (data) => {
          this.scanInfo = data.text;
          this.navCtrl.push(InfosFormPage,this.scanInfo);
        },(error) => {
          alert('impossible de faire le scan precision'+ error);
        }
      )

  //return this.scanInfo;
  }
}
