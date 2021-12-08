import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { ApisvcService } from 'src/app/ApiService/apisvc.service'; 
import { AlertController, ToastController ,AnimationController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import {Agenda} from 'src/app/interfaces/agenda';
import { BdlocalService } from 'src/app/services/bdlocal.service';
 

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  agendas: any;
  agenda: Agenda[]=[];
  users:any;
  viaje:any;
  user_show:any;
  test: "esto es un test";
  viajes:any;
  message: "esto es un test";
  
  constructor(public bdLocal: BdlocalService,private activeRoute: ActivatedRoute, private router: Router,private api: ApisvcService, public toastController: ToastController,public alertController: AlertController,private spinnerservice: NgxSpinnerService,private animationCtrl: AnimationController){}
  ionViewWillEnter(){
    this.getUsuarios();
    this.getViajes();
    this.getUsuario(1);
    this.refreshbd()
  }

  home(){
    this.router.navigate(['/home'])
  }
  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
  }
  getUsuario(userId:any){
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user_show=data;
    });
  }
  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes=data;
    });
  }

  mostrar1(msg:any){
    //this.getUsuario(this.viaje.id_conductor);
    this.presentAlert(msg)
  }
  refreshdata(){
    this.getUsuario(this.viaje.id_conductor);
  }
  async presentAlert(msg:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //header: this.viaje.destino, //titulo
      header: "titulo", //titulo
      //message: 'Conductor: Kevin Rojas' + '<br>' +  'Destino: Placilla Curauma' + '<br>' + 'Precio: $2000' + '<br>' + 'Hora: 13:30',
      //message: 'Conductor: '+this.user_show.name + '<br>' +  'Destino: '+ this.viaje.destino + '<br>' + 'Precio: $'+ this.viaje.precio+ '<br>' + 'Hora:'+ this.viaje.hora ,
      //message: this.test,
      message: "",     
      buttons: ['Llamar']
    });
    await alert.present();

    const {role}= await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role)
  }
  spinner(): void{     this.spinnerservice.show();     setTimeout(()=>{       this.spinnerservice.hide();     },      1500);   }
  ngOnInit() {
    this.spinner()
  }


  refreshbd(){
    this.agendas = this.bdLocal.agenda;
  }
  sendEmail(){
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    
  }
}