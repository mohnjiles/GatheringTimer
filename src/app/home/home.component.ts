import {Component, OnInit} from '@angular/core';

import {Collectable} from '../collectable/collectable';
import {CollectableService} from '../collectable/collectable.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  collectables: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectableService.getCollectables()
      .then(collectables => this.collectables = collectables);
  }
}
