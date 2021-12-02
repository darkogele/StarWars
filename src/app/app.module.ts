import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipListComponent } from './StarshipList/StarshipList.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { PlanetsModule } from './planets/planets.module';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    PlanetsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
