// trip.component.ts
import { Component } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  startPoint: string = '';
  endPoint: string = '';

  constructor(public tripService: TripService) {}

  addTrip() {
    if (this.startPoint && this.endPoint) {
      this.tripService.addTrip(this.startPoint, this.endPoint);
      this.startPoint = '';
      this.endPoint = '';
    }
  }

  clearAll() {
    this.tripService.clearTrips();
  }
}