import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryPage } from './recovery.page';
import { MimoduloModule } from 'src/app/mimodulo/mimodulo.module';
import { FooterComponent } from 'src/app/Component/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryPage,
    //children:[
      //{
        //path: '',
        //component: FooterComponent
      //}
    //]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),MimoduloModule],
  exports: [RouterModule]
})
export class RecoveryPageRoutingModule {}

