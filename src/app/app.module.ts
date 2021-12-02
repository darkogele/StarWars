import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { PlanetsModule } from './planets/planets.module';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
import { NavComponent } from './_core/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
