import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as e from 'express';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // output is the name of the event that gets triggered
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(e: Event) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
