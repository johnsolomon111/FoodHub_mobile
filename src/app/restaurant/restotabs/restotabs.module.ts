import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestotabsPageRoutingModule } from './restotabs-routing.module';

import { RestotabsPage } from './restotabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestotabsPageRoutingModule
  ],
  declarations: [RestotabsPage]
})
export class RestotabsPageModule {}
