import { RedactarPage } from './../redactar/redactar';
import { CorreoPage } from './../correo/correo';
import { MailServiceProvider } from './../../providers/mail-service/mail-service';
import { Component } from '@angular/core';
import { NavController, NavParams , ModalController } from 'ionic-angular';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  
  public correos: Object;
  public correoPage = CorreoPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _mailServiceProvider: MailServiceProvider,
    public modalController: ModalController
  ) {
    this.correos = _mailServiceProvider.mails;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  nuevoCorreo(){
    let modal = this.modalController.create(RedactarPage, {opcion:'Nuevo Correo', correo: ''});
    modal.present();
  }

}
