import { Component } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss']
})
export class ListSalesmanComponent {

  salesmanList: Salesman[] = [
    {
      "id": "002",
      "name": "Miguel",
      "category": "Operador",
      "address": "Cra 62 32-24",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7593127,
        "height": 88.0
      },
      "photo": "person1",
      "vehicle": "moto"
    },
    {
      "id": "23",
      "name": "Ejemplo",
      "category": "Operador",
      "address": "dire",
      "isActive": false,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7432127,
        "height": 60.0
      },
      "photo": "person2",
      "vehicle": "carro"
    },
    {
      "id": "Carnet-001",
      "name": "Marco Gonzalez",
      "category": "Jefe de Area",
      "address": "Cra 78 52-36",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.6523126999999995,
        "height": 95.0
      },
      "photo": "person3",
      "vehicle": "ambulancia"
    },
    {
      "id": "enfiwne",
      "name": "camila",
      "category": "Operador",
      "address": "wgwe",
      "isActive": false,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7304127,
        "height": 54.0
      },
      "photo": "person2",
      "vehicle": "carro"
    },
    {
      "id": "new",
      "name": "Johan",
      "category": "Operador",
      "address": "direccion",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.6428127,
        "height": 99.0
      },
      "photo": "person1",
      "vehicle": "carro"
    },
    {
      "id": "nuevo2",
      "name": "juan",
      "category": "Operador",
      "address": "di",
      "isActive": false,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7633127,
        "height": 21.0
      },
      "photo": "persona4",
      "vehicle": "moto"
    },
    {
      "id": "prueba",
      "name": "carlos",
      "category": "Jefe de area",
      "address": "dire",
      "isActive": false,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7316127,
        "height": 82.0
      },
      "photo": "person3",
      "vehicle": "grua"
    },
    {
      "id": "weg",
      "name": "wgwgwg",
      "category": "wegweg",
      "address": "wegweg",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7429127,
        "height": 88.0
      },
      "photo": "wgweg",
      "vehicle": "ambulancia"
    },
    {
      "id": "werwegr",
      "name": "pepito",
      "category": "Operador",
      "address": "wsg",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.7246127,
        "height": 50.0
      },
      "photo": "persona5",
      "vehicle": "moto"
    },
    {
      "id": "wgg",
      "name": "pepe",
      "category": "Operador",
      "address": "wegwe",
      "isActive": true,
      "coordinates": {
        "latitude": 4.6811127,
        "longitude": 4.6405126999999995,
        "height": 33.0
      },
      "photo": "persona3",
      "vehicle": "grua"
    }
  ] 
}
