import { PlanetsComponent } from './planets/planets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './StarshipList/StarshipList.component';
import { StarshipsComponent } from './StarshipList/starships/starships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-starship', component: StarshipsComponent },
  { path: 'starship-list', component: StarshipListComponent },
  { path: 'planets-list', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
