import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutInnerPage } from './about-inner.page';

const routes: Routes = [
  {
    path: '',
    component: AboutInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutInnerPageRoutingModule {}
