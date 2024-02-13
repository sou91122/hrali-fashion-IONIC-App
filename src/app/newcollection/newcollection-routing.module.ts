import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcollectionPage } from './newcollection.page';

const routes: Routes = [
  {
    path: '',
    component: NewcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcollectionPageRoutingModule {}
