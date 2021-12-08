import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FooterComponent } from 'src/app/Component/footer/footer.component';
import { FooComponent } from 'src/app/mimodulo/foo/foo.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'foo',
        component: FooterComponent,
      },
      {
        path: '',
        component: FooComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule,]
})
export class HomePageRoutingModule {}
