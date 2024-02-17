import { Component, Input } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';

@Component({
  selector: 'app-salesman-card',
  templateUrl: './salesman-card.component.html',
  styleUrls: ['./salesman-card.component.scss']
})
export class SalesmanCardComponent {

  @Input() salesmanData!: Salesman;
  @Input() active: boolean = false;

  focusCard() {
    this.active = !this.active;
  }
}
