import { Injectable } from '@angular/core';

import { Collectable } from './collectable';
import { COLLECTABLES } from './collectable-list';


@Injectable()
export class CollectableService {

  trackedCollectables: Collectable[] = [];


  getCollectables(): Promise<Collectable[]> {
    return Promise.resolve(COLLECTABLES);
  }

  getCollectable(id: number): Promise<Collectable> {
    return this.getCollectables().then(list => list.find(collectable => collectable.id == id));
  }

  trackCollectable(collectable: Collectable): void {

    if (this.trackedCollectables.includes(collectable)) {
      this.removeCollectable(collectable);
    } else {
      this.trackedCollectables.push(collectable);
    }
  }

  removeCollectable(collectable: Collectable) {
    let index: number = this.trackedCollectables.indexOf(collectable);
    if (index !== -1) {
      this.trackedCollectables.splice(index, 1);
    }
  }
}
