import { Component, Input } from '@angular/core';
import { Salesman } from '@shared/models/salesman.model';
import { ALL_ICONS, ALL_IMAGES } from '../../constants/img-icons.constant';

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

  validateImage(image: string) {
    return ALL_IMAGES.includes(image);
  }

  validateIcon(icon: string) {
    return ALL_ICONS.includes(icon);
  }
}
