import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
  
  public correo: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.correo = navParams.data;
    console.log(this.correo);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  
}
