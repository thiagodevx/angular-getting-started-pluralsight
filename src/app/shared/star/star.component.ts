import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
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

  onClick() {
    this.notify.emit('Clicked!');
  }

  get starWidth() {
    return this._starWidth;
  }
}
