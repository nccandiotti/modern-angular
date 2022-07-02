import { Component, OnInit } from '@angular/core';
// importing array of tasks
import { TASKS } from '../../mock-tasks';
// importing interface
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {}
}
