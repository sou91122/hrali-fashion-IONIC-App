import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcollectionPageRoutingModule } from './newcollection-routing.module';

import { NewcollectionPage } from './newcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcollectionPageRoutingModule
  ],
  declarations: [NewcollectionPage]
})
export class NewcollectionPageModule {}
