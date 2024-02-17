import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListSalesmanComponent } from './components/list-salesman/list-salesman.component';
import { SalesmanCardComponent } from './components/salesman-card/salesman-card.component';
import { FormSalesmandComponent } from './components/form-salesmand/form-salesmand.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_MODULES } from './constants/material-modules-import';
import { SalesmanMapDetailComponent } from './components/salesman-map-detail/salesman-map-detail.component';
import { Page1Component } from './pages/page1/page1.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ListSalesmanComponent,
    SalesmanCardComponent,
    FormSalesmandComponent,
    SalesmanMapDetailComponent,
    Page1Component
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES
  ]
})
export class SalesmanModule { }
