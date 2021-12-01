import { StarShip } from './../_models/starship';
import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../_services/starship.service';

@Component({
  selector: 'app-StarshipList',
  templateUrl: './StarshipList.component.html',
  styleUrls: ['./StarshipList.component.css']
})
export class StarshipListComponent implements OnInit {
  starShips: StarShip[] = [];

  constructor(private startShipService: StarshipService) {
    this.starShips = this.startShipService.arrayOfShip;
  }

  ngOnInit() { }

  deleteShip(ship: StarShip) {
    this.startShipService.deleteShip(ship);
    this.starShips = this.startShipService.arrayOfShip;
  }
}
