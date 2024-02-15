import { Component, Input } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';

@Component({
  selector: 'app-salesman-card',
  templateUrl: './salesman-card.component.html',
  styleUrls: ['./salesman-card.component.scss']
})
export class SalesmanCardComponent {

  @Input() salesmanData!: Salesman;

  // public salesmanData: Salesman = {
  //   "id": "002",
  //   "name": "Miguel",
  //   "category": "Operador",
  //   "address": "Cra 62 32-24",
  //   "isActive": false,
  //   "coordinates": {
  //     "latitude": 4.6811127,
  //     "longitude": 4.6072127,
  //     "height": 3.0
  //   },
  //   "photo": "person1",
  //   "vehicle": "moto"
  // }
}
