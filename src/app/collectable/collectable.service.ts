import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { Collectable } from './collectable';
import { COLLECTABLES } from './collectable-list';


@Injectable()
export class CollectableService {
  trackedCollectables: Collectable[] = [];

  constructor(private cookieService: CookieService) {
    this.loadCollectables();
  }

  loadCollectables(): void {
    let savedCollectables = this.cookieService.get("trackedCollectables");
    if (savedCollectables != null) {
      this.trackedCollectables = JSON.parse(savedCollectables);
    }

    setTimeout(() => {this.sortCollectables()}, 2000);
  }

  getCollectables(): Promise<Collectable[]> {
    return Promise.resolve(COLLECTABLES);
  }

  getCollectable(id: number): Promise<Collectable> {
    return this.getCollectables().then(list => list.find(collectable => collectable.id == id));
  }

  trackCollectable(collectable: Collectable): void {

    if (this.trackedCollectables.find(x => x.id == collectable.id)) {
      console.log("removing");
      this.removeCollectable(collectable);
    } else {
      this.trackedCollectables.push(collectable);
    }
    this.cookieService.put("trackedCollectables", JSON.stringify(this.trackedCollectables));
  }

  removeCollectable(collectable: Collectable) {
    let index: number = this.trackedCollectables.indexOf(this.trackedCollectables.find(x => x.id == collectable.id));
    if (index !== -1) {
      this.trackedCollectables.splice(index, 1);
    }
  }

  sortCollectables(): void {
    this.trackedCollectables.sort((a: Collectable, b: Collectable) => {
      console.log(a.countdown);
      console.log(b.countdown);
      if (a.countdown < b.countdown)
        return -1;
      else if (a.countdown > b.countdown)
        return 1;
      else return 0;

    });
  }

}
