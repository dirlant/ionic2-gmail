import { CorreoPage } from './../correo/correo';
import { MailServiceProvider } from './../../providers/mail-service/mail-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    public _mailServiceProvider: MailServiceProvider
  ) {
    this.correos = _mailServiceProvider.Mails;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
