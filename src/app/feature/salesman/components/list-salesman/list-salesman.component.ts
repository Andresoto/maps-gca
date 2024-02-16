import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salesman } from '@core/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { FormSalesmandComponent } from '../form-salesmand/form-salesmand.component';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss']
})
export class ListSalesmanComponent {

  salesmanList: Salesman[] = [] 

  constructor(
    private salesmanService: SalesmanService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.salesmanService.getAllSalesman()
    .subscribe({
      next: (data) => {
        this.salesmanList = data;
      },
      error: (er) => {
        console.log(er);
      }
    });
    this.createSalesman()
  }

  createSalesman() {
    this.dialog.open(FormSalesmandComponent, {
      minHeight: '50vh',
      width: '100%',
      position: {
        bottom: '20px',
      }
    });
  }
}
