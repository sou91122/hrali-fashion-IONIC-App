import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferearnPage } from './referearn.page';

const routes: Routes = [
  {
    path: '',
    component: ReferearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferearnPageRoutingModule {}
