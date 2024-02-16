import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewSalesman } from '@core/models/salesman.model';
import { Vehicles } from '@core/models/vehicules.model';
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
    {value: 'pin2', text: 'Dron', icon: '../../../../../assets/icons/pin2.svg'},
    {value: 'pin1', text: 'Estación de servicio?', icon: '../../../../../assets/icons/pin1.svg'},
    {value: 'pin3', text: 'Cámara?', icon: '../../../../../assets/icons/pin3.svg'},
    {value: 'pin4', text: 'Celular?', icon: '../../../../../assets/icons/pin4.svg'},
    {value: 'pin10', text: 'Emergencia?', icon: '../../../../../assets/icons/pin10.svg'},
    {value: 'sinvehiculo', text: 'Sin vehículo', icon: '../../../../../assets/icons/sinvehiculo.svg'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private salesmanService: SalesmanService
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
    }

    let data: NewSalesman = this.formSalesman.getRawValue();

    this.salesmanService.createSalesman(data)
    .subscribe({
      next: (response) => {
        console.log("Creado", response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
