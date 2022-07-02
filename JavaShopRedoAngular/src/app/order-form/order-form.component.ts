import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl(''),
    size: new FormControl(''),
    base: new FormControl(''),
    temp: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
