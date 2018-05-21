import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the SolarBodiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SolarBodiesProvider {

  apiUrl = 'http://localhost:5000/api/v1/';

  constructor(public http: HttpClient) {
    console.log('Hello SolarBodiesProvider Provider');
  }

  getData(): Observable<ISolarBodies[]> {
    return this.http.get<ISolarBodies[]>(this.apiUrl);
  }

  getPlanets(url: string): Observable<IPlanets[]>{
    return this.http.get<IPlanets[]>(url);
  }

  getAstreoids(url: string): Observable<IAsteroids[]>{
    return this.http.get<IAsteroids[]>(url);
  }

}

export interface ISolarBodies {
  id: number;
  planets: string;
  asteroids: string;
}

export interface IAsteroids {
  id: number;
  name: string;
  origin: string;
  diameter: number;
  shape: string;
}


export interface IPlanets {
  id: number;
  name: string;
  surface: string;
  diameter: number;
  distanceFromSun: number;
  moon: IMoon;
}

export interface IMoon {
  id: number;
  name: string;
  diameter: number;
}
