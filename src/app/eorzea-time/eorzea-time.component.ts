import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TimeService } from '../time-service/time.service';

@Component({
  selector: 'eorzea-time',
  templateUrl: './eorzea-time.component.html',
  styleUrls: ['./eorzea-time.component.css']
})
export class EorzeaTimeComponent implements OnInit {
  eorzeaTime: string;

  constructor(private titleService: Title,
              private timeService: TimeService) { }

  ngOnInit() {
    this.setEorzeaTime();
    setInterval(() => this.setEorzeaTime(), 1000);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  setEorzeaTime(): void {
    var localEpoch = (new Date()).getTime();
    var epoch = localEpoch * 20.571428571428573 + 28800;
    var minutes = Math.floor((epoch / (1000 * 60)) % 60);
    var hours = Math.floor((epoch / (1000 * 60 * 60)) % 24);

    this.eorzeaTime = this.timeService.makeReadableTime(hours, minutes);
    this.setTitle(this.eorzeaTime);
  }
}
