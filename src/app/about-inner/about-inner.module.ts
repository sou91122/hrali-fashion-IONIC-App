import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutInnerPageRoutingModule } from './about-inner-routing.module';

import { AboutInnerPage } from './about-inner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutInnerPageRoutingModule
  ],
  declarations: [AboutInnerPage]
})
export class AboutInnerPageModule {}
