import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { SharedModule } from '../_shared/shared.module';



@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlanetsModule { }
