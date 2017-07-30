import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  private EORZEA_MULTIPLIER = 20.571428571428573;

  constructor() { }

  eorzeaToLocal(date: Date): Date {
    return new Date((date.getTime() - 28800) / this.EORZEA_MULTIPLIER);
  }

  localToEorzea(date: Date): Date {
    return new Date(date.getTime() * this.EORZEA_MULTIPLIER + 28800);
  }

  makeReadableTime(hours: number, minutes: number): string {
    let minutesText: string;
    let hoursText: string;
    let amPmText: string;

    if (hours == 0) {
      hoursText = "12";
      amPmText = "AM";
    } else if (hours > 0 && hours < 12) {
      amPmText = "AM";
      hoursText = hours.toString();
    } else if (hours > 12) {
      amPmText = "PM";
      hoursText = `${(hours - 12)}`;
    } else if (hours == 12) {
      amPmText = "PM";
      hoursText = `${hours}`;
    }

    if (minutes < 10) {
      minutesText = `0${minutes}`;
    } else {
      minutesText = minutes.toString();
    }

    return `${hoursText}:${minutesText} ${amPmText}`;
  }
}
