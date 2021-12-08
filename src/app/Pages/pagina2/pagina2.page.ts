import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ThisReceiver } from '@angular/compiler';
import { ApisvcService } from 'src/app/ApiService/apisvc.service';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
declare let google; 

@Component({
  selector: 'app-pagina2', 
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})

export class Pagina2Page implements OnInit {

  signinForm: FormGroup;

  nombreUsu:any;
  user:any;
  users:any;
  viajes:any;
  map:any;
 
  viaje: any ={
    strComienzo: "Duoc UC Viña", 
    strDestino:  "",
    strConductor:"", 
    strHora: "15:50",
    strNro:"555999777", 
    strMarca_auto:"",
    strPatente:"",
    strPrecio:"", 
    
    
  };
  constructor(public bdLocal: BdlocalService,private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController,
    public toastController: ToastController,private api: ApisvcService,private _builder:FormBuilder) { 
    
      this.signinForm = this._builder.group({
      destinito: ['', Validators.required],
      precito: ['', Validators.compose([Validators.required,Validators.maxLength(4),Validators.min(0),Validators.max(2000)])],
      horita: ['', Validators.required],
    })  

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreUsu = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.nombreUsu)
      }
    });

  }

  ionViewWillEnter(){
    this.user = this.nombreUsu
    this.getUsuarios();
    this.getViajes();
    this.crearMapa();
  }

  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
  }
  getUsuario(UserId: any){
    this.api.getUsuario(UserId).subscribe((data)=>{
      this.user=data;
    });
  }

  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    });
  }

  guardarViaje(){
    
    if(this.viaje.id_conductor==null){
      
      if(this.user==undefined){//verifico que selecciono un usuario
        this.presenToast("Seleccione un usuario")
        return;
      }
      //this.viaje.id_conductor=this.user.id; // hago que el id del conductor sea la misma que la del usuario
      this.viaje.strNro=this.user.numero; 
      this.viaje.strConductor=this.user.name; 
      this.viaje.strEmail=this.user.email; 
      this.viaje.strMarca_auto=this.user.auto.marca; 
      this.viaje.strPatente=this.user.auto.patente; 
      this.guardar()
      /*
      this.api.createViaje(this.viaje).subscribe(
        (success)=>{
          console.log(success)
          this.alerta();
          this.getViajes();
        },
        error=>{
          console.log(error)
          this.presenToast("Error: " + error)
        }
        
      )
      */
    } else {//modificara el post existente (update)

    }
  }
  

  alerta(){
    this.presentAlert(this.nombreUsu)
  }

  async presentAlert(msg:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.nombreUsu.name,
      message: 'Se agendó su viaje. ',
      buttons: ['Ok']
    });
    await alert.present();

    const {role}= await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role)
  }

  crearMapa() {
    const mapEle: HTMLElement = document.getElementById('map');
    const centerMap = { lat: -33.03375663978065, lng: -71.53309290707472};
    this.map = new google.maps.Map(mapEle, {
      center: centerMap,
      zoom: 17,
      disableDefaultUI: true,
    });
  console.log();
  }

  ngOnInit() {
  }
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")  
    localStorage.removeItem("pass")
  }
  
   
  async presenToast(Letter:string){
    const toast = await this.toastController.create({
      message: Letter,
      duration: 2000
    });
    toast.present();
  }
  guardar(){
    this.bdLocal.guardarUsuarios(this.viaje);
  }
  
  
}