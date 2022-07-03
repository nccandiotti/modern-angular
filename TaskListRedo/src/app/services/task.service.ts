import { Injectable } from '@angular/core';
// import mock json
// import { TASKS } from '../mock-tasks';
// importing interface
import { Task } from '../task';
// import observable /rxjs

import { Observable } from 'rxjs';

// http
import { HttpClient, HttpHeaders } from '@angular/common/http';

//set headers for patch and post
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
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

  deleteTasks(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    // delete type task, pass in url which includes id (defined line above)
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    // sending data, need to send headers with content type
    return this.http.patch<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
