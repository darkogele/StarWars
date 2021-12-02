import { PlanetsComponent } from './planets/planets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './StarshipList/StarshipList.component';
import { StarshipsComponent } from './StarshipList/starships/starships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starship/add', component: StarshipsComponent },
  { path: 'starship', component: StarshipListComponent },
  { path: 'planets', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
