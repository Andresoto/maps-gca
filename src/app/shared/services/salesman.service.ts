import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salesman } from '@core/models/salesman.model';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private baseURL = 'http://74.235.109.154/api/'

  constructor(
    private http: HttpClient
  ) { }

  getAllSalesman() {
    return this.http.get<Salesman[]>(`${this.baseURL}salesman`);
  }
}
