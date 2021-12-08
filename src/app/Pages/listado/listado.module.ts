import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';
import { ListadoPageRoutingModule } from './listado-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListadoPage } from './listado.page';

import { FooterComponent } from 'src/app/Component/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPageRoutingModule,
    MatExpansionModule,
    MatCardModule,
    NgxSpinnerModule
  ],
  declarations: [ListadoPage,FooterComponent]
})
export class ListadoPageModule {}
