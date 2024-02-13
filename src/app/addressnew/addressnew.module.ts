import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressnewPageRoutingModule } from './addressnew-routing.module';

import { AddressnewPage } from './addressnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressnewPageRoutingModule
  ],
  declarations: [AddressnewPage]
})
export class AddressnewPageModule {}
