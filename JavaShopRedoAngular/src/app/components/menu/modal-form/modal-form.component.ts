import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coffee } from '../../../Coffee'; // interface
import { CartItem } from '../../../CartItem'; // interface
import { Subscription } from 'rxjs'; // subscription
import { CoffeeService } from '../../../services/coffee.service'; // service
import { CartService } from '../../../services/cart.service'; // service
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @Input() selectedCoffee?: Coffee;
  @Input() showModal: boolean = false;
  @Output() btnClick = new EventEmitter();
  subscription: Subscription;
  faXmark = faXmark;
  cartItemsArray: Coffee[] = [];
  //form ----------------------------------------------------------------
  modalForm = new FormGroup({
    drink: new FormControl(`${this.selectedCoffee?.drink}`),
    price: new FormControl(`${this.selectedCoffee?.price}`),
    size: new FormControl('', Validators.required),
    flavor: new FormControl(''),
    hot: new FormControl('', Validators.required),
  });

  constructor(
    private coffeeService: CoffeeService,
    private cartService: CartService
  ) {
    this.subscription = this.coffeeService
      .onToggle()
      .subscribe((value) => (this.showModal = value));
  }

  ngOnInit(): void {
    console.log(this.selectedCoffee);
  }

  submitModalForm(e: Event, item: Coffee) {
    // e.preventDefault();
    console.log('item', item);
    this.toggleModal();
    this.coffeeService.toggleModal();
    this.cartItemsArray.push(item);
    console.log(this.cartItemsArray);
    alert('Drink added to cart');
  }

  toggleModal() {
    this.showModal = !this.showModal;
    this.coffeeService.toggleModal();

    console.log('showModal', this.showModal);
  }

  onClick() {
    this.btnClick.emit();
  }
}
