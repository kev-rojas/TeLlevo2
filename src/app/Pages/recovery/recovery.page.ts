import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  signinForm: FormGroup
  nombreUsu:string;

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController, private _builder:FormBuilder) 
  { 
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreUsu = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.nombreUsu)
      }
    });

    this.signinForm = this._builder.group({
      usuario: ['', Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])]
    })
  }

  alerta(){
    this.presentAlert(this.nombreUsu)
  }

  async presentAlert(msg:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.nombreUsu,
      message: 'Se envió un mail con el código de recuperación a su correo electronico',
      buttons: ['Ok']
    });
    await alert.present();

    const {role}= await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role)
  }


  ngOnInit() {
  }

}
