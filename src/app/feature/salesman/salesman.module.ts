import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule
  ]
})
export class SalesmanModule { }
