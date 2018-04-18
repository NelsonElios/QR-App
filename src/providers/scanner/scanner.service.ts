import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InfosFormPage} from "../../pages/infos-form/infos-form";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {NavController, NavParams} from "ionic-angular";
import {Observable} from "rxjs/Observable";


/*
  Generated class for the ScannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScannerProvider {


  scanInfo: string;
  constructor(public barScan: BarcodeScanner ) {
    console.log('Hello ScannerProvider Provider');
  }

  getScanInfos() {

    return this.barScan.scan();

  }

}
