import { Injectable } from '@angular/core';
import { StarShip } from '../_models/starship';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  arrayOfShip: StarShip[] = [];

  constructor() { }

  registerShip(ship: StarShip) {
    let singleShip: StarShip = ship;
    const id: string = Guid.create().toString();
    singleShip.id = id;
    this.arrayOfShip.push(singleShip);
  }

  deleteShip(ship: StarShip) {
    const newArray: StarShip[] = this.arrayOfShip.filter(x => x.id !== ship.id);
    this.arrayOfShip = newArray;
  }
}
