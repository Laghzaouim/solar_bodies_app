import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PlanetsPage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SolarBodiesProvider } from '../providers/solar-bodies/solar-bodies';
import { HttpClientModule } from '@angular/common/http';
import { AsteroidsPage } from '../pages/asteroids/asteroids';

@NgModule({
  declarations: [
    MyApp,
    PlanetsPage,
    AsteroidsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlanetsPage,
    AsteroidsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SolarBodiesProvider
  ]
})
export class AppModule {}
