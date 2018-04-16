import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfosFormPage } from './infos-form';

@NgModule({
  declarations: [
    InfosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(InfosFormPage),
  ],
})
export class InfosFormPageModule {}
