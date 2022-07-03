import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './Coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}
  fetchCoffee() {
    return this.http.get<Coffee>('http://localhost:3000/coffee');
  }
}
