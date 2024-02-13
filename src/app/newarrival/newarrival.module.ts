import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewarrivalPageRoutingModule } from './newarrival-routing.module';

import { NewarrivalPage } from './newarrival.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewarrivalPageRoutingModule
  ],
  declarations: [NewarrivalPage]
})
export class NewarrivalPageModule {}
