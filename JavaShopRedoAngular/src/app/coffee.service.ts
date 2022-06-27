import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface CoffeeResponse {
//   [
//     coffee: {
//       id: number;
//       drink: string;
//       price: string;
//       size: string;
//       flavor: string;
//       image: string;
//     }
//   ];
// }

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}
  fetchCoffee() {
    return this.http.get('http://localhost:3000/coffee');
  }
}
