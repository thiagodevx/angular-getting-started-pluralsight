import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  rating = 4;
  starWidth = 75;

  constructor() { }

  ngOnChanges() {
    this.showStars();
  }

  showStars() {
    const defaultValue = 75;
    const totalStars = 5;
    this.starWidth = this.rating * defaultValue / totalStars;
  }

}
