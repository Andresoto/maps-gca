import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Salesman } from '@core/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  center: google.maps.LatLngLiteral = { lat: 4.7116127, lng: 4.6811127 };
  zoom = 11;
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  salesmanList: Salesman[] = [];
  salesmanId = ''

  constructor(private salesmanService: SalesmanService) {}

  ngOnInit() {
    this.salesmanService.getAllSalesman().subscribe({
      next: (data) => {
        this.salesmanList = data;
        this.center = { lat: this.salesmanList[0].coordinates.latitude, lng: this.salesmanList[0].coordinates.longitude }
      },
      error: (er) => {
        console.log(er);
      },
    });
  }

  openInfoWindow(marker: MapMarker, id: string) {
    this.infoWindow.open(marker);
    this.salesmanId = id;
  }

}
