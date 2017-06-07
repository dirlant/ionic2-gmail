import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CorreoPage } from './../pages/correo/correo';
import { InboxPage } from './../pages/inbox/inbox';
import { RedactarPage } from './../pages/redactar/redactar';

import { MailServiceProvider } from '../providers/mail-service/mail-service';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    CorreoPage,
    RedactarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,
    CorreoPage,
    RedactarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MailServiceProvider,
    ToastProvider
  ]
})
export class AppModule {}
