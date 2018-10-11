import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',

  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon {
      color:green;
  }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;

  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue: this.isFavorite,
      oldValue: !this.isFavorite,
    }); // notifying others
  }

}

export interface FavoriteChangedEventsArgs {
  newValue:Boolean,
  oldValue:Boolean
}