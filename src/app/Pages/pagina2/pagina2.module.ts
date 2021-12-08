import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Pagina2PageRoutingModule } from './pagina2-routing.module';
import { Pagina2Page } from './pagina2.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from 'src/app/Component/footer/footer.component';
import { BtnComponent } from 'src/app/Component/btn/btn.component';
import {ReactiveFormsModule} from '@angular/forms'


 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina2PageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  declarations: [Pagina2Page,FooterComponent,BtnComponent]
})
export class Pagina2PageModule {}
