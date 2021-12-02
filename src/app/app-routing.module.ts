import { PlanetsComponent } from './planets/planets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsRoutingModule } from './StarshipList/starships-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starship', loadChildren: () => StarshipsRoutingModule },
  { path: 'planets', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
