import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CorreoPage } from './../pages/correo/correo';
import { HttpModule} from '@angular/http';
import { InboxPage } from './../pages/inbox/inbox';

import { MailServiceProvider } from '../providers/mail-service/mail-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    CorreoPage
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
    CorreoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MailServiceProvider
  ]
})
export class AppModule {}
