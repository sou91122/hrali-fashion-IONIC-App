import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferearnPageRoutingModule } from './referearn-routing.module';

import { ReferearnPage } from './referearn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferearnPageRoutingModule
  ],
  declarations: [ReferearnPage]
})
export class ReferearnPageModule {}
