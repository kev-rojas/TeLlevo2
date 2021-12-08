import { Component, OnInit } from '@angular/core';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { NavigationExtras,Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

    nombre:string;
    contra:string;
    tipo:string;
    Email:string;
    Numero:number;
    signinForm: FormGroup

  constructor(public bdLocal: BdlocalService,private router: Router, private _builder:FormBuilder) {

    this.signinForm = this._builder.group({
      nombreusu: ['', Validators.required],
      contraseña: ['', Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      tipousu: ['', Validators.required],
      numero: ['', Validators.required],
    })
  }


  guardar(){
    //this.bdLocal.guardarUsuarios(this.nombre,this.contra,this.tipo,this.Email,this.Numero,"","");
  }

  selection(){
    if(this.tipo == "Conductor"){
      //Si es cierto va a conductor //conductor = 0
      let navigationExtras: NavigationExtras ={
        state: {dato: this.nombre} 
      };
      //console.log("ruta: "+this.router.navigate['/Pagina2Page']);
      this.router.navigate(['/home']);
    } else {
      //si es falso va a pasajero //pasajero = 1
      let navigationExtras: NavigationExtras ={
        state: {dato: this.nombre}
      };
      this.router.navigate(['/pasajero'],navigationExtras);
    }
  }
  ngOnInit() {
  }

}
