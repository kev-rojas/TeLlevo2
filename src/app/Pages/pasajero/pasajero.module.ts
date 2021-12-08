import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { IonicModule } from '@ionic/angular';

import { PasajeroPageRoutingModule } from './pasajero-routing.module';
import { PasajeroPage } from './pasajero.page';
import {ReactiveFormsModule} from '@angular/forms'
import { BtnComponent } from 'src/app/Component/btn/btn.component';
import { FooterComponent } from 'src/app/Component/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajeroPageRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [PasajeroPage,FooterComponent,BtnComponent]
})
export class PasajeroPageModule {}
