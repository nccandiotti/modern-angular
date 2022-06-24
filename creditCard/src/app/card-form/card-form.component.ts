import { Component, OnInit } from '@angular/core';
// form group tells angular about the form we are creating, FormControl is specifically about each of the fields
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
