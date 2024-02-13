import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewarrivalPage } from './newarrival.page';

const routes: Routes = [
  {
    path: '',
    component: NewarrivalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewarrivalPageRoutingModule {}
