import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderidPage } from './orderid.page';

const routes: Routes = [
  {
    path: '',
    component: OrderidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderidPageRoutingModule {}
