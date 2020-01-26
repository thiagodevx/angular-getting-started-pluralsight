import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() ratingClicked: number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  private _starWidth = 75;

  constructor() { }

  ngOnChanges() {
    this.showStars();
  }

  showStars() {
    const defaultValue = 75;
    const totalStars = 5;
    this._starWidth = this.ratingClicked * defaultValue / totalStars;
  }

  onClick() {
    this.notify.emit(this.ratingClicked);
  }

  get starWidth() {
    return this._starWidth;
  }
}
