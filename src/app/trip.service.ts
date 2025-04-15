// trip.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Trip {
  start: string;
  end: string;
  level: number;
  isContinued: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripsSubject = new BehaviorSubject<Trip[]>([]);
  trips$ = this.tripsSubject.asObservable();

  addTrip(start: string, end: string) {
    const currentTrips = this.tripsSubject.value;
    const lastTrip = currentTrips[currentTrips.length - 1];
    
    let isContinued = false;
    let level = 1;
    
    if (lastTrip) {
      isContinued = lastTrip.end.toLowerCase() === start.toLowerCase();
      
      // Check if same start and end as previous trip
      if (lastTrip.start.toLowerCase() === start.toLowerCase() && 
          lastTrip.end.toLowerCase() === end.toLowerCase()) {
        level = 2;
      }
    }
    
    const newTrip: Trip = {
      start,
      end,
      level,
      isContinued
    };
    
    this.tripsSubject.next([...currentTrips, newTrip]);
  }

  clearTrips() {
    this.tripsSubject.next([]);
  }
}