import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: '@nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'Saw a cool tree on my hike',
    },
    {
      title: 'Snowy Mountain',
      username: '@mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'A mysterious, snowy, magical mountain',
    },
    {
      title: 'Mountain Biking',
      username: '@biking12222',
      imageUrl: 'assets/biking.jpeg',
      content: 'Wanna see me do a wheelie',
    },
  ];
}
