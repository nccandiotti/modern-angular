import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = lorem.sentence();

  handleInput(value: string) {
    console.log(value);
  }
}
