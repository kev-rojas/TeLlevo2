import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';



@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    FooComponent
  ]
})
export class MimoduloModule { }
