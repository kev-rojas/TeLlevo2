import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { IonicModule } from '@ionic/angular';
import { RecoveryPageRoutingModule } from './recovery-routing.module';
import { RecoveryPage } from './recovery.page';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ReactiveFormsModule} from '@angular/forms'

import { FooterComponent } from 'src/app/Component/footer/footer.component';


@NgModule({
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryPageRoutingModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
  declarations: [RecoveryPage,FooterComponent]
})
export class RecoveryPageModule {}

