import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../coffee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  coffeeArray: {} = [];
  showModal: boolean = false;
  constructor(private coffeeService: CoffeeService) {
    this.getCoffee();
  }

  getCoffee() {
    this.coffeeService.fetchCoffee().subscribe((response) => {
      console.log(response);
      this.coffeeArray = response;
    });
  }
  handleClick() {
    this.showModal = true;
    console.log(this.showModal);
  }
  ngOnInit(): void {}
}
