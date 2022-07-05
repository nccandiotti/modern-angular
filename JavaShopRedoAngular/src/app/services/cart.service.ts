import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { CartItem } from '../CartItem';

interface CartTotals {
  totalItems: number;
  totalCost: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsArray: CartItem[] = [];
  // private subject = new Subject<any>();
  private cartTotalsSubject = new BehaviorSubject<CartTotals>({
    totalItems: 0,
    totalCost: 0,
  });
  private cartTotalsSubject$ = this.cartTotalsSubject.asObservable();

  // total: number = 0;

  constructor() {}

  getTotal(): Observable<CartTotals> {
    return this.cartTotalsSubject$;
  }
  setTotal(latestValue) {
    return this.cartTotalsSubject.next(latestValue);
  }

  addItemToCart(item: CartItem): Observable<CartItem[]> {
    return of((this.cartItemsArray = [...this.cartItemsArray, item]));
  }
}
