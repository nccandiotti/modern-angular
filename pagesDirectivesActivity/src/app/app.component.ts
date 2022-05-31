import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Pool',
      url: 'https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
    },
    {
      title: 'At the Hotel',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
