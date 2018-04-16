import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ScanPage} from "../scan/scan";
import {InfosFormPage} from "../infos-form/infos-form";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanPage;
  tab3Root = InfosFormPage;

  constructor() {

  }
}
