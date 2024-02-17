import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { ALL_ICONS, ALL_IMAGES } from '../constants/imgIcons.constant';

@Component({
  selector: 'app-salesman-map-detail',
  templateUrl: './salesman-map-detail.component.html',
  styleUrls: ['./salesman-map-detail.component.scss']
})
export class SalesmanMapDetailComponent implements OnChanges{

  @Input() salesmanId!: string;

  salesman!: Salesman;
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

  validateImage(image: string) {
    return ALL_IMAGES.includes(image);
  }

  validateIcon(icon: string) {
    return ALL_ICONS.includes(icon);
  }
}
