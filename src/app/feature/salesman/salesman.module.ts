import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListSalesmanComponent } from './components/list-salesman/list-salesman.component';
import { SalesmanCardComponent } from './components/salesman-card/salesman-card.component';
import { HeaderComponent } from '@shared/components/header/header.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ListSalesmanComponent,
    SalesmanCardComponent
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    GoogleMapsModule,
    MatButtonModule
  ]
})
export class SalesmanModule { }
