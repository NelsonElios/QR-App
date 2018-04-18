import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {InfosFormPage} from "../infos-form/infos-form";
import {ScannerProvider} from "../../providers/scanner/scanner.service";

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
  constructor(public navCtrl: NavController, public navParams: NavParams,/*private barScan: BarcodeScanner*/ private scanProvider: ScannerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scan() {


    this.scanProvider.getScanInfos().then(

        (data) => {

          this.scanInfo = data.text;
          this.navCtrl.push(InfosFormPage, {data: this.scanInfo})

        },(error) => {
          alert('impossible de faire le scan precision'+ error);
        }
      );




      //this.navParams.data = this.scanInfo;
  }
  //return this.scanInfo;

}
