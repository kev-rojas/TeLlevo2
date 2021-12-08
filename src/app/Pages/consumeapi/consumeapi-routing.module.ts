import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumeapiPage } from './consumeapi.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumeapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumeapiPageRoutingModule {}
