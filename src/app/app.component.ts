import { Component } from '@angular/core';
import { CollectableService } from './collectable/collectable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collectable Timer';
  maxHeight: Number = 125;
  expandCollapseText = "Expand";

  constructor(public collectableService: CollectableService) {

  }

  expandCollapse(): void {
    if (this.maxHeight == 125) {
      this.maxHeight = 4000;
      this.expandCollapseText = "Collapse";
    } else {
      this.maxHeight = 125;
      this.expandCollapseText = "Expand";
    }
  }

}
