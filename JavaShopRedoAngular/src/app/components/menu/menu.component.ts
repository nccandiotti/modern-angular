import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../coffee.service';
import { Coffee } from '../../Coffee';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  coffeeArray: {} = [];
  showModal: boolean = false;
  selectedCoffee: Coffee;
  constructor(private coffeeService: CoffeeService) {
    this.getCoffee();
  }

  getCoffee() {
    this.coffeeService.fetchCoffee().subscribe((response) => {
      console.log(response);
      this.coffeeArray = response;
    });
  }
  openModal(coffee: Coffee) {
    this.showModal = true;
    console.log('showModal', this.showModal);
    this.selectedCoffee = coffee;
  }
  ngOnInit(): void {}
}
