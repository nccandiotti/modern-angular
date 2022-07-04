import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './Coffee';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
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
}
