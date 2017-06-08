import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ToastProvider {

  constructor(
    public http: Http,
    public toastController: ToastController
  ) {
    console.log('Hello ToastProvider Provider');
  }


  basicToast(varMessage, varDuration = 3000, varPosition = 'top'){    
    let toast = this.toastController.create({      
      message: varMessage,        
      duration: varDuration,
      position: varPosition           
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  buttonToast(varMessage, varDuration = 3000, varPosition = 'top', varShowCloseButton = true, varCloseButtonText = 'Ok'){    
    let toast = this.toastController.create({      
      message: varMessage,        
      duration: varDuration,
      position: varPosition,      
      showCloseButton: varShowCloseButton,
      closeButtonText: varCloseButtonText, 
      /*dismissOnPageChange: varDismissOnPageChange
      */
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
