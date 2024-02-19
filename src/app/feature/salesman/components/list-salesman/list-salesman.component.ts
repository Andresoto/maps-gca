import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salesman } from '@shared/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { FormSalesmandComponent } from '../form-salesmand/form-salesmand.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss'],
})
export class ListSalesmanComponent {
  /**
   * [salesmanList]
   * @description define variable that saves the list of salesmen
   * @type {Salesman[]}
   */
  public salesmanList: Salesman[] = [];

  /**
   * [focusCard]
   * @description variable that controls whether a single card has the active class
   * @type {boolean[]}
   */
  public focusCard: boolean[] = [];

  constructor(
    private salesmanService: SalesmanService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._getSalesman();
    this.salesmanService.salesman$.subscribe({
      next: (data) => {
        this.salesmanList = data;
        this.focusCard = Array(data.length).fill(false);
      },
    });
  }

  /**
   * [_getSalesman]
   * @description Get the list of salesmen
   * @private
   * @return { void }
   */
  private _getSalesman(): void {
    this.salesmanService.getAllSalesman().subscribe({
      next: (data) => {
        this.salesmanService.salesman$.next(data);
        let center: google.maps.LatLngLiteral = {
          lat: data[0].coordinates.latitude,
          lng: data[0].coordinates.longitude,
        };
        this.salesmanService.mapCenter$.next(center);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }

  /**
   * [foundSalesman]
   * @description centers the selected salesman on the map
   * @params {Salesman, number} salesman, index
   * @return { void }
   */
  public foundSalesman(salesman: Salesman, index: number): void {
    let center: google.maps.LatLngLiteral = {
      lat: salesman.coordinates.latitude,
      lng: salesman.coordinates.longitude,
    };
    this.salesmanService.mapCenter$.next(center);
    for (let i = 0; i < this.focusCard.length; i++) {
      if (i !== index) {
        this.focusCard[i] = false;
      }
    }
    this.focusCard[index] = !this.focusCard[index];
  }

  /**
   * [createSalesman]
   * @description Open the modal to create a salesman, if a salesman was created, 
   * show creation confirmation and update the list of salesmen
   * @return { void }
   */
  public createSalesman(): void {
    const dialogRef = this.dialog.open(FormSalesmandComponent, {
      minHeight: '50vh',
      width: '100%',
      position: {
        bottom: '20px',
      },
    });

    dialogRef.afterClosed()
    .subscribe({
      next: (data) => {
        if(data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vendedor creado correctamente",
            showConfirmButton: false,
            timer: 1500
          });
  
          this._getSalesman();
        }
      }
    });
  }
}
