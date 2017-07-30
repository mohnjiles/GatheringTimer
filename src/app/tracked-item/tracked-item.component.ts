import { Component, Input, OnInit } from '@angular/core';
import { Collectable } from '../collectable/collectable';
import { TimeService } from '../time-service/time.service';

@Component({
  selector: 'tracked-item',
  templateUrl: './tracked-item.component.html',
  styleUrls: ['./tracked-item.component.css']
})
export class TrackedItemComponent implements OnInit {

  @Input() trackedItem: Collectable;
  EORZEA_MULTIPLIER = 20.571428571428573;

  public isSpawned = false;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    setInterval(() => { this.updateCountdownTime() }, 400);
  }

  updateCountdownTime(): void {

    let eorzeaTime = this.timeService.localToEorzea(new Date());
    let nodeStartHours = +this.trackedItem.start_time.split(':')[0];
    let nodeStartMinutes = +this.trackedItem.start_time.split(':')[1];
    let nodeEndHours = +this.trackedItem.end_time.split(':')[0];
    let nodeEndMinutes = +this.trackedItem.end_time.split(':')[1];

    let eSpawn = new Date(eorzeaTime);

    eSpawn.setUTCHours(nodeStartHours);
    eSpawn.setUTCMinutes(0);
    eSpawn.setUTCDate(eorzeaTime.getUTCDate());

    let eDespawn = new Date(eSpawn);
    eDespawn.setUTCHours(nodeEndHours);
    eDespawn.setUTCMinutes(nodeEndMinutes);

    if (eorzeaTime > eSpawn && eorzeaTime < eDespawn) {
      this.isSpawned = true;

      let earthTime = this.timeService.eorzeaToLocal(eDespawn);
      let hours = earthTime.getHours();
      let minutes = earthTime.getMinutes();

      this.trackedItem.earthTime = this.timeService.makeReadableTime(hours, minutes);

      let distance = earthTime.getTime() - (new Date()).getTime();
      let distanceMinutes = Math.floor(distance / 60000);
      let distanceSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.trackedItem.countdown = `${distanceMinutes}m ${distanceSeconds}s`;
    } else {

      this.isSpawned = false;

      while (eSpawn < eorzeaTime) {
        eSpawn.setUTCDate(eorzeaTime.getUTCDate() + 1);
      }

      let earthTime = this.timeService.eorzeaToLocal(eSpawn);
      let hours = earthTime.getHours();
      let minutes = earthTime.getMinutes();

      this.trackedItem.earthTime = this.timeService.makeReadableTime(hours, minutes);

      let distance = earthTime.getTime() - (new Date()).getTime();
      let distanceMinutes = Math.floor(distance / 60000);
      let distanceSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.trackedItem.countdown = `${distanceMinutes}m ${distanceSeconds}s`;
    }

  }

}
