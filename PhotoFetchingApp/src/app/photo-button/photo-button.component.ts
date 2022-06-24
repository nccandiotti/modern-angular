import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';
@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css'],
})
export class PhotoButtonComponent implements OnInit {
  showPhoto: boolean = false;
  photoUrl: string = '';

  constructor(private photoFetchService: PhotoFetchService) {
    this.fetchPhoto();
  }

  handleClick() {
    this.fetchPhoto();
    this.showPhoto = true;
  }

  fetchPhoto() {
    this.photoFetchService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      console.log(response.urls.regular);
    });
  }

  ngOnInit(): void {}
}
