import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IniciosesionPageRoutingModule } from './iniciosesion-routing.module';
import { IniciosesionPage } from './iniciosesion.page';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from 'src/app/Component/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosesionPageRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [IniciosesionPage,FooterComponent]
})
export class IniciosesionPageModule {}
