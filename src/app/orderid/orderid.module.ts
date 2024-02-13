import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderidPageRoutingModule } from './orderid-routing.module';

import { OrderidPage } from './orderid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderidPageRoutingModule
  ],
  declarations: [OrderidPage]
})
export class OrderidPageModule {}
