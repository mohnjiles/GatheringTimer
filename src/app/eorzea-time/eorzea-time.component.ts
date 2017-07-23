import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'eorzea-time',
  templateUrl: './eorzea-time.component.html',
  styleUrls: ['./eorzea-time.component.css']
})
export class EorzeaTimeComponent implements OnInit {
  eorzeaTime: string;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setEorzeaTime();
    setInterval(() => this.setEorzeaTime(), 1000);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  setEorzeaTime(): void {
    var localEpoch = (new Date()).getTime();
    var epoch = localEpoch * 20.571428571428573;
    var minutes = Math.floor((epoch / (1000 * 60)) % 60);
    var hours = Math.floor((epoch / (1000 * 60 * 60)) % 24);

    var minutesText: string;
    var hoursText: string;
    var amPmText: string;

    if (hours == 0) {
      hoursText = "12";
      amPmText = "AM";
    } else if (hours > 0 && hours < 12) {
      amPmText = "AM";
      hoursText = hours.toString();
    } else if (hours > 12) {
      amPmText = "PM";
      hoursText = `${(hours - 12)}`;
    }

    if (minutes < 10) {
      minutesText = `0${minutes}`;
    } else {
      minutesText = minutes.toString();
    }

    this.eorzeaTime = `${hoursText}:${minutesText} ${amPmText}`;
    this.setTitle(this.eorzeaTime);
  }
}
