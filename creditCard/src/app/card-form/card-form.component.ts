import { Component, OnInit } from '@angular/core';
// form group tells angular about the form we are creating, FormControl is specifically for each of the fields in the form
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  });
  constructor() {}

  ngOnInit(): void {}
}
