import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Planet } from '../_models/planets';
import { APIService } from '../_services/API.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  dataSource = new MatTableDataSource(this.planets);
  displayedColumns: string[] = ['name', 'diameter', 'gravity', 'climate', 'population', 'orbital_period', 'terrain', 'rotation_period', 'url'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.api.getPlanets().subscribe((res: any) => {
      this.planets = res.results;
      this.dataSource = new MatTableDataSource(this.planets);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
