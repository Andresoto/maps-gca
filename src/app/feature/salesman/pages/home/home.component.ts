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
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  salesmanList: Salesman[] = [];
  salesmanId = ''

  constructor(private salesmanService: SalesmanService) {}

  ngOnInit() {
    this.subscribeSalesman();
    this.salesmanService.mapCenter$
    .subscribe({
      next: (data) => {
        this.center = data;
      }
    })
  }

  subscribeSalesman() {
    this.salesmanService.salesman$.subscribe({
      next: (data) => {
        this.salesmanList = data;
      }
    });
  }

  getSalesman() {
    this.salesmanService.getAllSalesman()
    .subscribe({
      next: (data) => {
        this.salesmanService.salesman$.next(data);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }

  openInfoWindow(marker: MapMarker, id: string) {
    this.infoWindow.open(marker);
    this.salesmanId = id;
  }

}
