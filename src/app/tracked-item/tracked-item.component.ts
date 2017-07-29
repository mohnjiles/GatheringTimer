import { Component, Input, OnInit } from '@angular/core';
import { Collectable } from '../collectable/collectable';

@Component({
  selector: 'tracked-item',
  templateUrl: './tracked-item.component.html',
  styleUrls: ['./tracked-item.component.css']
})
export class TrackedItemComponent implements OnInit {

  @Input() trackedItem: Collectable;
  EORZEA_MULTIPLIER = 20.571428571428573;

  constructor() { }

  ngOnInit() {
    setInterval(() => {this.updateCountdownTime()}, 1000);
  }

  updateCountdownTime(): void {

    let eorzeaTime = this.localToEorzea(new Date());
    let nodeHours = +this.trackedItem.start_time.split(':')[0];

    let eSpawn = new Date(eorzeaTime);

    eSpawn.setUTCHours(nodeHours);
    eSpawn.setUTCMinutes(0);
    eSpawn.setUTCDate(eorzeaTime.getUTCDate());

    while (eSpawn < eorzeaTime) {
      eSpawn.setUTCDate(eorzeaTime.getUTCDate() + 1);
    }

    let earthTime = this.eorzeaToLocal(eSpawn);

    let distance = earthTime.getTime() - (new Date()).getTime();
    let minutes = Math.floor(distance / 60000);
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.trackedItem.countdown = `${minutes}m ${seconds}s`;

  }

  eorzeaToLocal(date: Date): Date {
    return new Date((date.getTime() - 28800) / this.EORZEA_MULTIPLIER);
  }

  localToEorzea(date: Date): Date {
    return new Date(date.getTime() * this.EORZEA_MULTIPLIER + 28800);
  }



}
