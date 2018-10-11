import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World from naing';

  post = {
    title : 'Post Title',
    isFavorite : true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    console.log(eventArgs);
  }
}


