import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApisvcService } from 'src/app/ApiService/apisvc.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

  signinForm: FormGroup
  @ViewChild('animar',{read: ElementRef, static:true}) animar: ElementRef;
  
  hide=true;
  nombreUsu:any;
  // estas variables que vienen es de el tutorial de la profe
  apiURL = 'http://my-json-server.typicode.com/KiwiState/gitjson/users' //'http://192.168.0.11:3000/users'
  user: any;
  users: any;
  posts: any;
  post: any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  usuario_login:any = {
    id_usuario:"",
    id_password:"",
  }

  constructor(public toastController: ToastController, private router: Router, private animationCtrl: AnimationController,
    private _builder:FormBuilder,private api: ApisvcService,private http : HttpClient) {
      
      this.signinForm = this._builder.group({
        usuario: ['', Validators.required],
        contraseña: ['', Validators.required]
      })
      
    }
    
    ionViewWillEnter(){
      if(this.verifyLogged()){
        this.usuario_login.id_usuario = localStorage.getItem("user"); 
        this.usuario_login.id_password = localStorage.getItem("pass");
        this.login();
      }
    }
  
    getUsuarios(){
      this.api.getUsuarios().subscribe((data)=>{
        this.users=data
      });
    }
    getUsuario(userId){
      this.api.getUsuario(userId).subscribe((data)=>{
        this.user=data
      });
    }

  ngAfterViewInit(){
    const anima = this.animationCtrl
    .create()
    .addElement(this.animar.nativeElement)
    .duration(1000)
    .iterations(1)
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
    anima.play();
  }


  ingre(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu} 
    };
  this.router.navigate(['/pagina2'],navigationExtras);
  }

  recovery(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu}
    };

  this.router.navigate(['/recovery'],navigationExtras);
  }

  pasa(){
    let navigationExtras: NavigationExtras ={
      state: {dato: this.nombreUsu}
    };

  this.router.navigate(['/pasajero'],navigationExtras);
  }
  
  newuser(){
    this.router.navigate(['/iniciosesion']);
  }
  apii(){
    this.router.navigate(['/consumeapi']);
  }
  login(){
    this.http.get<any>(this.apiURL).subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.name === this.usuario_login.id_usuario && a.password === this.usuario_login.id_password
      });
      if(user){
       // alert("Logueao")
        this.nombreUsu = user
        let navigationExtras: NavigationExtras ={
          state: {dato: this.nombreUsu} 
        };
        if(user.tipo == "Conductor"){
          this.router.navigate(['/pagina2'],navigationExtras);
        }else{
          this.router.navigate(['/pasajero'],navigationExtras);
        }
        localStorage.removeItem("token")
        localStorage.removeItem("user")  
        localStorage.removeItem("pass")
        localStorage.setItem("token","ZVEGFCNFMXKXH5DS8D")
        localStorage.setItem("user",user.name)  
        localStorage.setItem("pass",user.password)  
      }else{
        alert("usuario no encontrado")
      }
    })
  }
  verifyLogged(){
    const token = localStorage.getItem("token");
    return token ? true : false;
  }
}
 
