import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  private _starWidth = 75;

  constructor() { }

  ngOnChanges() {
    this.showStars();
  }

  showStars() {
    const defaultValue = 75;
    const totalStars = 5;
    this._starWidth = this.rating * defaultValue / totalStars;
  }

  get starWidth() {
    return this._starWidth;
  }
}
