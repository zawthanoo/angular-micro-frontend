import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { FlightInsertComponent } from './flight-insert/flight-insert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightInsertComponent
  ]
})
export class FlightsModule { }
