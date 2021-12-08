import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApisvcService } from 'src/app/ApiService/apisvc.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertController: AlertController,
    public toastController: ToastController,private api: ApisvcService) { }


  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")  
    localStorage.removeItem("pass")
  }

  ngOnInit() {}

}
