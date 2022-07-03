import { Component, OnInit } from '@angular/core';

// importing interface
import { Task } from '../../task';
// import services
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // type is Task (interface) starts out as an empty array
  tasks: Task[] = [];
  // service needs to be a provider in the constructor of the component
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // call service in onInit because it fires on page load
    // subscribe is kind of like a promise
    this.taskService
      .getTasks()
      .subscribe((response) => (this.tasks = response));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
