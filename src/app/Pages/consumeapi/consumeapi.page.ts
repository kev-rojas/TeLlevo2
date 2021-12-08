import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-consumeapi',
  templateUrl: './consumeapi.page.html',
  styleUrls: ['./consumeapi.page.scss'],
})
export class ConsumeapiPage implements OnInit {

  constructor() { }
  @ViewChild('map') mapView: ElementRef;

  ionViewDidEnter(){
    this.createMap();
  };

  createMap(){
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });
  };
  ngOnInit() {
  }

}

        