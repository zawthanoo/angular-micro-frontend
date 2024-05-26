import { Routes } from '@angular/router';
import { FlightInsertComponent } from './flight-insert/flight-insert.component';

export const FLIGHTS_ROUTES: Routes = [
  { path: 'flight-insert', component: FlightInsertComponent },
  { path: 'flight-edit', component: FlightInsertComponent }
];
