import { ToastProvider } from './../../providers/toast/toast';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-redactar',
  templateUrl: 'redactar.html',
})
export class RedactarPage {
  public datosCorreo: any;
  public opcion: string;
  public de: string = 'diego.carciente@gmail.com'; 
  public para: string = '';
  public asunto: string = '';
  public mensaje: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewController: ViewController,
    public toastProvider: ToastProvider

    
  ) {
    this.opcion = this.navParams.get('opcion');
    this.datosCorreo = this.navParams.get('correo');

    if (this.opcion == 'Reply') {
      this.de = 'diego.carciente@gmail.com';
      this.para = this.datosCorreo.nombre;
      this.asunto = 'Re:' + this.datosCorreo.asunto;
      this.mensaje = this.datosCorreo.mensaje;
      
    } else if (this.opcion == 'Reply All') {
      this.de = 'diego.carciente@gmail.com';
      this.para = this.datosCorreo.direccion + '; otro@gmail.com';
      this.asunto = 'Re:' + this.datosCorreo.asunto;
    } else if (this.opcion == 'Forward') {
      this.de = 'diego.carciente@gmail.com';
      this.para = '';
      this.asunto = this.datosCorreo.asunto;
    }


  }

  cerrarModal(){
    this.viewController.dismiss();
  }

  enviarCorreo(){
    this.viewController.dismiss();
    this.toastProvider.basicToast(
      'Mensaje enviado', 1000, 'button'
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedactarPage');
  }

}
