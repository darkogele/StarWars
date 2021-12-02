import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { StarshipsComponent } from './starships/starships.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { StarshipListComponent } from './StarshipList/StarshipList.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeModule } from './home/home.module';
import { PlanetsModule } from './planets/planets.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StarshipsComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    HomeModule,
    PlanetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
