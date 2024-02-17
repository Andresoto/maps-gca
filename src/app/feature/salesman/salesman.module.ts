import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListSalesmanComponent } from './components/list-salesman/list-salesman.component';
import { SalesmanCardComponent } from './components/salesman-card/salesman-card.component';
import { FormSalesmandComponent } from './components/form-salesmand/form-salesmand.component';
import { HeaderComponent } from '@shared/components/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_MODULES } from './material';
import { SalesmanMapDetailComponent } from './components/salesman-map-detail/salesman-map-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ListSalesmanComponent,
    SalesmanCardComponent,
    FormSalesmandComponent,
    SalesmanMapDetailComponent
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    GoogleMapsModule,
    HeaderComponent,
    ReactiveFormsModule,
    MATERIAL_MODULES
  ]
})
export class SalesmanModule { }
