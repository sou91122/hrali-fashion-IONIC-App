import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangespwdPage } from './changespwd.page';

const routes: Routes = [
  {
    path: '',
    component: ChangespwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangespwdPageRoutingModule {}
