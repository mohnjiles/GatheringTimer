import { Injectable } from '@angular/core';

import { Collectable } from './collectable';
import { COLLECTABLES } from './collectable-list';


@Injectable()
export class CollectableService {
  getCollectables(): Promise<Collectable[]> {
    return Promise.resolve(COLLECTABLES);
  }

  getCollectable(id: number): Promise<Collectable> {
    return this.getCollectables().then(list => list.find(collectable => collectable.id == id));
  }
}
