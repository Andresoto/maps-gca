import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VEHICLES_OPTIONS } from '@feature/salesman/constants/img-icons.constant';
import { NewSalesman } from '@shared/models/salesman.model';
import { Vehicles } from '@shared/models/vehicules.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-form-salesmand',
  templateUrl: './form-salesmand.component.html',
  styleUrls: ['./form-salesmand.component.scss'],
})
export class FormSalesmandComponent {
  /**
   * [formSalesman]
   * @description defines the form to create seller
   * @type {FormGroup}
   */
  public formSalesman!: FormGroup;

  /**
   * [VehiclesOptions]
   * @description defines the options for the vehicle select
   * @type {Vehicles[]}
   */
  public VehiclesOptions: Vehicles[] = VEHICLES_OPTIONS;

  constructor(
    private formBuilder: FormBuilder,
    private salesmanService: SalesmanService,
    private dialogRef: MatDialogRef<FormSalesmandComponent>
  ) {
    this._buildForm();
  }

  /**
   * [_buildForm]
   * @description defines the form fields for creating a salesman
   * @private
   * @return {void}
   */
  private _buildForm(): void {
    this.formSalesman = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      address: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      vehicle: ['', [Validators.required]],
    });
  }

  /**
   * [validField]
   * @description validates whether a specific form field is valid
   * @params {string} field
   * @return {boolean | undefined }
   */
  public validField(field: string): boolean | undefined {
    return (
      this.formSalesman.get(field)?.touched &&
      this.formSalesman.get(field)?.invalid
    );
  }

  /**
   * [create]
   * @description make the request to create a salesman
   * @return { void }
   */
  create(): void {
    if (!this.formSalesman.valid) {
      this.formSalesman.markAllAsTouched();
      return;
    }

    let data: NewSalesman = this.formSalesman.getRawValue();

    this.salesmanService.createSalesman(data).subscribe({
      next: (response) => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
