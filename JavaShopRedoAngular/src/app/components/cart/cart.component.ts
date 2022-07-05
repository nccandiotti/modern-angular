import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../CartItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cartItems: CartItem[] = this.cartService.cartItemsArray;
  cartTotal: number = 0;
  totalItems: number = 0;
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  onAddToCart(item: CartItem) {
    this.cartService.addItemToCart(item).subscribe((r) => {
      console.log(r);
      this.cartItems.push(item);
    });
  }

  ngOnInit(): void {
    this.cartService.getTotal().subscribe((total: any) => {
      this.cartTotal = total.totalItems;
      this.totalItems = total.totalCost;
    });
    console.log('cartItemsArray:', this.cartService.cartItemsArray);
  }
}
