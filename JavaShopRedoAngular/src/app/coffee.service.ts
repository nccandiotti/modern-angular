import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coffee } from './Coffee';
import { Observable, Subject } from 'rxjs';

//set headers for patch and post
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'http://localhost:3000/coffee';
  private showModal: boolean = false;
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {}
  fetchCoffee() {
    return this.http.get<Coffee>('http://localhost:3000/coffee');
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    this.subject.next(this.showModal);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  addCoffee(coffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(this.apiUrl, coffee, httpOptions);
  }
}
