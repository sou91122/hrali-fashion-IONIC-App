import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdercomfirmPageRoutingModule } from './ordercomfirm-routing.module';

import { OrdercomfirmPage } from './ordercomfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdercomfirmPageRoutingModule
  ],
  declarations: [OrdercomfirmPage]
})
export class OrdercomfirmPageModule {}
