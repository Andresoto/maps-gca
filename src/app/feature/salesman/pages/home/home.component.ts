import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ALL_ICONS } from '@feature/salesman/constants/img-icons.constant';
import { Salesman } from '@shared/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { Subscription } from 'rxjs';

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
  public timerInterval: any;

  salesmanList: Salesman[] = [];
  salesmanId = ''

  constructor(private salesmanService: SalesmanService) {}

  ngOnInit() {
    this.subscribeSalesman();
    this.subscribeMapCenter();
    this.updateCoordinates();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  subscribeSalesman() {
    this.salesmanService.salesman$.subscribe({
      next: (data) => {
        this.salesmanList = data;
      }
    });
  }

  subscribeMapCenter() {
    this.salesmanService.mapCenter$
    .subscribe({
      next: (data) => {
        this.center = data;
      }
    })
  }

  updateCoordinates() {
    this.timerInterval = setInterval(() => {
      this.getSalesman();
    }, 30000);
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

  validateIcon(icon: string) {
    if (ALL_ICONS.includes(icon)) {
      return `../../../../../assets/icons/${icon}.svg`
    } else {
      return `../../../../../assets/icons/sinvehiculo.svg`
    }
  }

}
