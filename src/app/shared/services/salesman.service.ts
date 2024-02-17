import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewSalesman, Salesman } from '@shared/models/salesman.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private baseURL = 'http://74.235.109.154/api'

  public salesman$ = new BehaviorSubject<Salesman[]>([]);
  public mapCenter$ = new BehaviorSubject<google.maps.LatLngLiteral>({ lat: 0, lng: 0 });

  constructor(
    private http: HttpClient
  ) { }

  getAllSalesman() {
    return this.http.get<Salesman[]>(`${this.baseURL}/salesman`);
  }

  createSalesman(data: NewSalesman) {
    return this.http.post(`${this.baseURL}/salesman`, data);
  }

  getOne(id: string) {
    return this.http.get<Salesman>(`${this.baseURL}/salesman/${id}`);
  }
}
