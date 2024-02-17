import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewSalesman } from '@shared/models/salesman.model';
import { Vehicles } from '@shared/models/vehicules.model';
import { SalesmanService } from '@shared/services/salesman.service';

@Component({
  selector: 'app-form-salesmand',
  templateUrl: './form-salesmand.component.html',
  styleUrls: ['./form-salesmand.component.scss']
})
export class FormSalesmandComponent {
  formSalesman!: FormGroup;

  VehiclesOptions: Vehicles[] = [
    {value: 'ambulancia', text: 'Ambulancia', icon: '../../../../../assets/icons/ambulancia.svg'},
    {value: 'carro', text: 'Carro', icon: '../../../../../assets/icons/carro.svg'},
    {value: 'grua', text: 'Grúa', icon: '../../../../../assets/icons/grua.svg'},
    {value: 'moto', text: 'Moto', icon: '../../../../../assets/icons/moto.svg'},
    {value: 'pin1', text: 'pin1', icon: '../../../../../assets/icons/pin1.svg'},
    {value: 'pin2', text: 'pin2', icon: '../../../../../assets/icons/pin2.svg'},
    {value: 'pin3', text: 'pin3', icon: '../../../../../assets/icons/pin3.svg'},
    {value: 'pin4', text: 'pin4', icon: '../../../../../assets/icons/pin4.svg'},
    {value: 'pin10', text: 'pin10', icon: '../../../../../assets/icons/pin10.svg'},
    {value: 'sinvehiculo', text: 'Sin vehículo', icon: '../../../../../assets/icons/sinvehiculo.svg'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private salesmanService: SalesmanService,
    private dialogRef: MatDialogRef<FormSalesmandComponent>
  ) {
    this.buildForm();
  }

  buildForm() {
    this.formSalesman = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      address: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      vehicle: ['', [Validators.required]],
    })
  }

  validField(field: string) {
    return this.formSalesman.get(field)?.touched && this.formSalesman.get(field)?.invalid;
  }

  create(): void {
    if (!this.formSalesman.valid) {
      this.formSalesman.markAllAsTouched();
      return;
    }

    let data: NewSalesman = this.formSalesman.getRawValue();

    this.salesmanService.createSalesman(data)
    .subscribe({
      next: (response) => {
        console.log("Creado", response);
        this.dialogRef.close();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
