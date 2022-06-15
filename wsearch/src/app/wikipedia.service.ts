import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// http client is a class, need to create an instance of it - kind of like a dependency to WikipediaService - think Injection w /dependencies

// dependency injection
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  sendSelected = new EventEmitter<void>();

  // dependency injection here
  constructor(private http: HttpClient) {}

  search(term: string) {
    // http method w/ get request
    // second argument is params for get req
    // when search is called, http req is executed
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
    this.sendSelected.emit();
  }
}
