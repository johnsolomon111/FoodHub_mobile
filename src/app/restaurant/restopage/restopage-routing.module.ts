import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestopagePage } from './restopage.page';

const routes: Routes = [
  {
    path: '',
    component: RestopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestopagePageRoutingModule {}
