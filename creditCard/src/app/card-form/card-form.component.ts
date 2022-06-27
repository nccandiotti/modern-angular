import { Component, OnInit } from '@angular/core';
// form group tells angular about the form we are creating, FormControl is specifically for each of the fields in the form
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';
import * as e from 'express';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  // instance of the form, pass in an object with key/value pairs that are the form fields
  // FormControl - each field. first argument is the default value, second arg is an array of validator(s) (if using validators)
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      // Validators.pattern(/\s/),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      Validators.maxLength(3),
      Validators.min(0),
      Validators.max(999),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();
    console.log('form was submitted');
  }
}
