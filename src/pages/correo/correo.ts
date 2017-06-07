import { RedactarPage } from './../redactar/redactar';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
  
  public correo: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalController : ModalController
  ) {
    this.correo = navParams.data;
    console.log(this.correo);
    
  }

  redactar(opcionVar){
    let modal = this.modalController.create(RedactarPage, {opcion:opcionVar, correo: this.correo});
    modal.present();
  }

  
}
