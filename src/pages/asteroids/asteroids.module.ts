import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsteroidsPage } from './asteroids';

@NgModule({
  declarations: [
    AsteroidsPage,
  ],
  imports: [
    IonicPageModule.forChild(AsteroidsPage),
  ],
})
export class AsteroidsPageModule {}
