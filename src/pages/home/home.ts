import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SolarBodiesProvider, IPlanets } from '../../providers/solar-bodies/solar-bodies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  data: IPlanets[]

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public provider: SolarBodiesProvider) {

  }

  ngOnInit(): void {
    this.provider.getData().subscribe(result => {
      //debugger
      let planetsUrl = result[0].planets;
      console.log(planetsUrl)
      this.provider.getPlanets(planetsUrl).subscribe(result => {
        console.log(result[0])      
          this.data = result
      })
    })
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add more planets',
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Surface',
          placeholder: 'Surface'
        },
        {
          name: 'Diameter',
          placeholder: 'Diameter in km'
        },
        {
          name: 'DistanceSun',
          placeholder: 'Distance Sun in au'
        },
        {
          name: 'MoonName',
          placeholder: 'Moon name'
        },
        {
          name: 'MoonDiameter',
          placeholder: 'Moon diameter in km'
        },
      
      
      
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data.Surface)
          }
        }
      ]
    });
    prompt.present();
  }



}
