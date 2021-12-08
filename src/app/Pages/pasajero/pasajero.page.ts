import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApisvcService } from 'src/app/ApiService/apisvc.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  signinForm: FormGroup

  nombreUsu:any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController, 
    private modalCtrl: ModalController,private api: ApisvcService, private _builder:FormBuilder) { 
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreUsu = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.nombreUsu)
      }
    });

    this.signinForm = this._builder.group({
      destino: ['', Validators.required],
      hora: ['',Validators.required]
    })
  }

  listado(){
    this.router.navigate(['/listado'])
  }
  

  ngOnInit() {
  }

}

