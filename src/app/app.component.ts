// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-trip></app-trip>
  `,
  styles: []
})
export class AppComponent {
  title = 'trip-visualizer';
}