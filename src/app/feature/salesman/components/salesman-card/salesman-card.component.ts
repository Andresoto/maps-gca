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

  allImages: string[] = [
    'person1',
    'person2',
    'person3',
    'person4',
    'person5',
    'person6',
  ]

  allIcons: string[] = [
    'ambulancia',
    'carro',
    'grua',
    'moto',
    'pin1',
    'pin2',
    'pin3',
    'pin4',
    'pin10',
    'sinvehiculo',
  ]

  focusCard() {
    this.active = !this.active;
  }

  validateImage(image: string) {
    return this.allImages.includes(image);
  }

  validateIcon(icon: string) {
    return this.allIcons.includes(icon);
  }
}
