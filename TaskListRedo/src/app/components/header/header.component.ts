import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task List';
  showAddTask: boolean = false;
  subscription: Subscription;

  // reminder - in order to use a service you have to add it as an arg to the constructor
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    // this will toggle the boolean value of showAddTask in service
    this.uiService.toggleAddTask();
    this.showAddTask;
  }
  // returns a string true/false value
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
