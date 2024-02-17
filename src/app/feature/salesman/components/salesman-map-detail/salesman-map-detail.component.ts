import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-salesman-map-detail',
  templateUrl: './salesman-map-detail.component.html',
  styleUrls: ['./salesman-map-detail.component.scss']
})
export class SalesmanMapDetailComponent implements OnChanges{

  @Input() salesmanId!: string;

  salesman?: Salesman;
  isLoader: boolean = false;

  constructor(
    private salesmanService: SalesmanService
  ) {}

  ngOnInit() {
    this.getSalesman();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['salesmanId'] && !changes['salesmanId'].firstChange ) {
      this.getSalesman();
    }
  }

  getSalesman() {
    this.isLoader = true;
    this.salesmanService.getOne(this.salesmanId)
    .subscribe({
      next: (response) => {
        this.salesman = response;
        this.isLoader = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoader = false;
      }
    });
  }
}
