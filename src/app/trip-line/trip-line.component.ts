// trip-line.component.ts
import { Component, Input } from '@angular/core';
import { Trip } from '../trip.service';

@Component({
  selector: 'app-trip-line',
  templateUrl: './trip-line.component.html',
  styleUrls: ['./trip-line.component.css']
})
export class TripLineComponent {
  @Input() trip!: Trip;
  @Input() index!: number;
  
  getStartAbbr(): string {
    return this.trip.start.substring(0, 3).toUpperCase();
  }
  
  getEndAbbr(): string {
    return this.trip.end.substring(0, 3).toUpperCase();
  }
}