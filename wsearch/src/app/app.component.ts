import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  // nothing in the body
  // wikipedia argument in constructor MUST be an argument of the Wikipedia Service
  constructor(private wikipedia: WikipediaService) {}
  ngInit() {}
  // ----------------------------------------------------------------
  // this will take a string because that's what's emitted from the child component
  onTerm(term: string) {
    // subscribe to search pass callback function which is response from wikipedia API
    this.wikipedia.search(term).subscribe((response: any) => {
      console.log(response.query.search);
      this.pages = response.query.search;
    });
  }
}

// https://en.wikipedia.org/w/api.php?
