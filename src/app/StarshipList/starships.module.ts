import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipListComponent } from './StarshipList.component';
import { StarshipsComponent } from './starships/starships.component';
import { SharedModule } from '../_shared/shared.module';


@NgModule({
  declarations: [StarshipListComponent, StarshipsComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    SharedModule
  ]
})
export class StarshipsModule { }
