import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ALL_ICONS } from '@feature/salesman/constants/img-icons.constant';
import { Salesman } from '@shared/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /**
   * [infoWindow]
   * @description obtains the reference of the dropdown that opens when the pointer is clicked on the map
   * @type {MapInfoWindow}
   */
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  /**
   * [center]
   * @description variable to center the map
   * @type {google.maps.LatLngLiteral}
   */
  public center: google.maps.LatLngLiteral = { lat: 4.7116127, lng: 4.6811127 };

  /**
   * [zoom]
   * @description variable that defines the zoom on the map
   * @type {number}
   */
  public zoom: number = 14;

  /**
   * [markerOptions]
   * @description variable that defines the map configuration options
   * @type {google.maps.MarkerOptions}
   */
  public markerOptions: google.maps.MarkerOptions = { draggable: false };

  /**
   * [timerInterval]
   * @description variable that saves the setInterval
   * @type {any}
   */
  public timerInterval:  any;

  /**
   * [salesmanList]
   * @description define variable that saves the list of salesmen
   * @type {Salesman[]}
   */
  salesmanList: Salesman[] = [];

  /**
   * [salesmanId]
   * @description defines the variable that stores the id of a salesman
   * @type {string}
   */
  public salesmanId: string = ''

  constructor(private salesmanService: SalesmanService) {}

  ngOnInit(): void {
    this._subscribeSalesman();
    this._subscribeMapCenter();
    this._updateCoordinates();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  /**
   * [_subscribeSalesman]
   * @description update salesmen list
   * @private
   * @return { void }
   */
  private _subscribeSalesman(): void {
    this.salesmanService.salesman$.subscribe({
      next: (data) => {
        this.salesmanList = data;
      }
    });
  }

  /**
   * [_subscribeMapCenter]
   * @description update the point on the map
   * @private
   * @return { void }
   */
  private _subscribeMapCenter(): void {
    this.salesmanService.mapCenter$
    .subscribe({
      next: (data) => {
        this.center = data;
      }
    })
  }

  /**
   * [_updateCoordinates]
   * @description Update salesman list every 30 s
   * @private
   * @return { void }
   */
  private _updateCoordinates(): void {
    this.timerInterval = setInterval(() => {
      this._getSalesman();
    }, 30000);
  }

  /**
   * [_getSalesman]
   * @description Get the list of salesmen
   * @private
   * @return { void }
   */
  private _getSalesman(): void {
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

  /**
   * [openInfoWindow]
   * @description opens the dropdown of a pointer on the map
   * @return { void }
   */
  public openInfoWindow(marker: MapMarker, id: string): void {
    this.infoWindow.open(marker);
    this.salesmanId = id;
  }

  /**
   * [validateIcon]
   * @description validates if the icon exists in the assets, 
   * if it does not exist it returns one by default
   * @return { string }
   */
  public validateIcon(icon: string): string {
    if (ALL_ICONS.includes(icon)) {
      return `../../../../../assets/icons/${icon}.svg`
    } else {
      return `../../../../../assets/icons/sinvehiculo.svg`
    }
  }

}
