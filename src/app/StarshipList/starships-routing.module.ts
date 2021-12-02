import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipListComponent } from './StarshipList.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {path: "", component: StarshipListComponent},
  {path: "add", component: StarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
