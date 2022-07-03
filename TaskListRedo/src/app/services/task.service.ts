import { Injectable } from '@angular/core';
// import mock json
import { TASKS } from '../mock-tasks';
// importing interface
import { Task } from '../task';
// import observable /rxjs

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
