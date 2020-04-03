import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestotabsPage } from './restotabs.page';

const routes: Routes = [
  {
    path: 'restaurant',
    component: RestotabsPage,
    children: [
      {
        path: 'restopage',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../restopage/restopage.module').then(m => m.RestopagePageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestotabsPageRoutingModule {}
