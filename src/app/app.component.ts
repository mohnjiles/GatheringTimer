import { Component } from '@angular/core';
import { CollectableService } from './collectable/collectable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collectable Timer';

  constructor(private collectableService: CollectableService) {

  }


}
