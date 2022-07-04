import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    size: new UntypedFormControl(''),
    base: new UntypedFormControl(''),
    temp: new UntypedFormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
