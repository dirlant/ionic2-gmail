import { EnviadosPage } from './../pages/enviados/enviados';
import { RedactarPage } from './../pages/redactar/redactar';
import { InboxPage } from './../pages/inbox/inbox';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InboxPage;
  @ViewChild('content') menu: NavController;
  inboxPage = InboxPage;
  redactarPage = RedactarPage;
  enviadosPage = EnviadosPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuController: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  abrirPagina(pagina){
    this.menu.setRoot(pagina);
    this.menuController.close();
  }
}

