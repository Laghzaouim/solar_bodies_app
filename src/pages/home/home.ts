import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SolarBodiesProvider, IPlanets } from '../../providers/solar-bodies/solar-bodies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class PlanetsPage implements OnInit {


  testName: string;
  data: IPlanets[]
  planetsUrl: string

  newPlanet:IPlanets

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public provider: SolarBodiesProvider) {

  }

  ngOnInit(): void {
    this.provider.getData().subscribe(result => {
      //debugger
      this.planetsUrl = result[0].planets;
      console.log(this.planetsUrl)
      this.provider.getPlanets(this.planetsUrl).subscribe(result => {
        console.log(result[0])
        this.data = result
      })
    })
  }


  addPlanets(name: string, diameter: null, distanceFromSun: number, surface: string, nameMoon:string, diameterMoon: null) {
   

    let newPlanet: IPlanets = {
      name: name,
      diameter: diameter,
      distanceFromSun: distanceFromSun,
      surface: surface,
      moon: {
        name:nameMoon,
        diameter: diameterMoon
      } 
      
    }

    this.provider.addPlanets(newPlanet, this.planetsUrl).subscribe(
      planet => this.data.push(newPlanet));
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
          name: 'NameMoon',
          placeholder: 'Moon name'
        },
        {
          name: 'DiameterMoon',
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
        
            this.addPlanets(
              data.Name,
              data.Diameter,
              data.DistanceSun,
              data.Surface,
              data.NameMoon,
              data.DiameterMoon
            );

          }
        }
      ]
    });
    prompt.present();
  }
}
