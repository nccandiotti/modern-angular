import { Injectable } from '@angular/core';
// import mock json
// import { TASKS } from '../mock-tasks';
// importing interface
import { Task } from '../task';
// import observable /rxjs

import { Observable } from 'rxjs';

// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // calling get method/req on http, after "get" specify Task array
    return this.http.get<Task[]>(this.apiUrl);
  }
}
