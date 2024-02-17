import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salesman } from '@shared/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { FormSalesmandComponent } from '../form-salesmand/form-salesmand.component';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss'],
})
export class ListSalesmanComponent {
  salesmanList: Salesman[] = [];
  focusCard: boolean[] = [];

  constructor(
    private salesmanService: SalesmanService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getSalesman();
    this.salesmanService.salesman$.subscribe({
      next: (data) => {
        this.salesmanList = data;
        this.focusCard = Array(data.length).fill(false);
      },
    });
  }

  getSalesman() {
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

  foundSalesman(salesman: Salesman, index: number) {
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

  createSalesman() {
    const dialogRef = this.dialog.open(FormSalesmandComponent, {
      minHeight: '50vh',
      width: '100%',
      position: {
        bottom: '20px',
      },
    });

    dialogRef.afterClosed()
    .subscribe({
      next: () => {
        console.log('Cerrado');
      }
    });
  }
}
