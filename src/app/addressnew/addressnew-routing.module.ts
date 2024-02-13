import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressnewPage } from './addressnew.page';

const routes: Routes = [
  {
    path: '',
    component: AddressnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressnewPageRoutingModule {}
