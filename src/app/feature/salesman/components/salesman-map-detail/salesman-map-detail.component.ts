import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Salesman } from '@shared/models/salesman.model';
import { SalesmanService } from '@shared/services/salesman.service';
import { ALL_ICONS, ALL_IMAGES } from '../../constants/img-icons.constant';

@Component({
  selector: 'app-salesman-map-detail',
  templateUrl: './salesman-map-detail.component.html',
  styleUrls: ['./salesman-map-detail.component.scss']
})
export class SalesmanMapDetailComponent implements OnChanges{

  /**
   * [salesmanId]
   * @description defines the variable that stores the id of a salesman
   * @type {Salesman}
   */
  @Input() salesmanId!: string;

  /**
   * [salesman]
   * @description define variable that saves the of salesman
   * @type {Salesman}
   */
  public salesman!: Salesman;

  /**
   * [isLoader]
   * @description variable that defines whether the loader is shown or not
   * @type {boolean}
   */
  public isLoader: boolean = false;

  constructor(
    private salesmanService: SalesmanService
  ) {}

  ngOnInit(): void {
    this._getSalesman();
  }

  /**
   * [ngOnChanges]
   * @description Validates if the salesman id has changed, if this is the case, obtain the data of this seller
   * @return { void }
   */
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['salesmanId'] && !changes['salesmanId'].firstChange ) {
      this._getSalesman();
    }
  }

  /**
   * [_getSalesman]
   * @description get a specific salesman
   * @private
   * @return { void }
   */
  private _getSalesman(): void {
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
