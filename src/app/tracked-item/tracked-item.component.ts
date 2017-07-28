import { Component, Input, OnInit } from '@angular/core';
import { Collectable } from '../collectable/collectable';

@Component({
  selector: 'tracked-item',
  templateUrl: './tracked-item.component.html',
  styleUrls: ['./tracked-item.component.css']
})
export class TrackedItemComponent implements OnInit {

  @Input() trackedItem: Collectable;

  constructor() { }

  ngOnInit() {
    setInterval(() => {this.updateCountdownTime()}, 1000);
  }

  updateCountdownTime(): void {
    const EORZEA_MULTIPLIER = 20.571428571428573;

    let localEpoch = (new Date()).getTime();
    let epoch = localEpoch * EORZEA_MULTIPLIER + 28800;
    // let minutes = Math.floor((epoch / (1000 * 60)) % 60);
    // let hours = Math.floor((epoch / (1000 * 60 * 60)) % 24);

    let eorzeaDateTime = new Date(epoch);

    let nodeHours = +this.trackedItem.start_time.split(':')[0];
    let nodeMinutes = +this.trackedItem.start_time.split(':')[1];
    let nodeSpawn = new Date(eorzeaDateTime.getFullYear(), eorzeaDateTime.getMonth()+1, eorzeaDateTime.getDate(), nodeHours, nodeMinutes);

    let epochTicks = Math.floor((nodeSpawn.getTime() - 28800) / EORZEA_MULTIPLIER);
    //let earthTicks = epochTicks + (new Date(1970, 1, 1)).getTime();
    let earthDateTime = new Date(epochTicks);

    this.trackedItem.countdown = `${earthDateTime}`;
  }


}
