import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Agenda } from '../interfaces/agenda';
import { NavigationExtras,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  agenda: Agenda[]=[];
  private _storage: Storage | null = null;

    constructor(private storage: Storage, public toastController: ToastController, private router: Router) {
    this.init();
    this.cargarFavoritos();
  }

  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({

      message: mensaje,

      translucent:true,

      color:'medium',

      position: 'top',

      duration: 2000

    });

    toast.present();

  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarFavoritos() {
    const miagenda=await this.storage.get('agenda');
    if(miagenda){
      this.agenda=miagenda;
    }
  }
  getData(){
    return this._storage.get('agenda');
    
  }
  guardarUsuarios(agenda: Agenda){
    this.agenda.unshift(agenda)
    this._storage.set('agenda',this.agenda);
    this.presentToast('Viaje Agendado')
    
  }
  
 /*
    strDestino:      string;
    strConductor:    string;
    strHora:         string;
    strNro:          string;
    strMarca_auto:   string;
    strPatente:      string;
    strPrecio:       string;

  

  guardarUsuarios(nombre:string, contraseña:string,tipo:string,email:string,nro:number,mrc:string,ptn:string){
      //aki quede holi
      //creo instrucion y
      const existe=this.agenda.find(c=>c.strNombre == nombre);
      if(!existe){
      this.agenda.unshift({strNombre:nombre,strContraseña:contraseña,strTipo:tipo,strEmail:email,intNro:nro,strMarca_auto:mrc,strPatente:ptn})
      this._storage.set('agenda',this.agenda);
      this.router.navigate(['/home']);
      this.presentToast('Contacto agregado con exito!')
      } else {
        this.presentToast('Error: Usuario ya existe')
      }
  }

  tipoUsuario(tipo:string){
    const existe=this.agenda.find(c=>c.strTipo = tipo);
    return existe
  }

  */
}
