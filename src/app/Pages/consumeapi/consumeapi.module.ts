import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumeapiPageRoutingModule } from './consumeapi-routing.module';

import { ConsumeapiPage } from './consumeapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumeapiPageRoutingModule
  ],
  declarations: [ConsumeapiPage]
})
export class ConsumeapiPageModule {}
