import { Component } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss']
})
export class ListSalesmanComponent {

  salesmanList: Salesman[] = [] 

  constructor(
    private salesmanService: SalesmanService
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
    })
  }
}
