import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../_shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [NavComponent]
})
export class CoreModule { }
