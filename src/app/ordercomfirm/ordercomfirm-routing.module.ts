import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdercomfirmPage } from './ordercomfirm.page';

const routes: Routes = [
  {
    path: '',
    component: OrdercomfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdercomfirmPageRoutingModule {}
