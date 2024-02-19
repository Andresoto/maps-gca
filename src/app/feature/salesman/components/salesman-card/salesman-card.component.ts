import { Component, Input } from '@angular/core';
import { Salesman } from '@shared/models/salesman.model';
import { ALL_ICONS, ALL_IMAGES } from '../../constants/img-icons.constant';

@Component({
  selector: 'app-salesman-card',
  templateUrl: './salesman-card.component.html',
  styleUrls: ['./salesman-card.component.scss']
})
export class SalesmanCardComponent {

  /**
   * [salesmanData]
   * @description Variable that stores the information of a salesmen
   * @type {Salesman}
   */
  @Input() salesmanData!: Salesman;
  /**
   * [active]
   * @description defines whether to add a specific class to a card
   * @type {boolean}
   */
  @Input() active: boolean = false;

  /**
   * [focusCard]
   * @description Change the state of the active variable
   * @return {void}
   */
  public focusCard():void {
    this.active = !this.active;
  }

  /**
   * [validateImage]
   * @description validates if the image string is found in the project assets
   * @params {string} image
   * @return {boolean}
   */
  public validateImage(image: string): boolean {
    return ALL_IMAGES.includes(image);
  }

  /**
   * [validateIcon]
   * @description validates if the icon string is found in the project assets
   * @params {string} icon
   * @return {boolean}
   */
  public validateIcon(icon: string): boolean {
    return ALL_ICONS.includes(icon);
  }
}
