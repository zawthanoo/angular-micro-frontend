import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { FLight } from '../flight.model';

@Component({
  selector: 'app-flight-insert',
  templateUrl: './flight-insert.component.html',
  styleUrl: './flight-insert.component.css'
})
export class FlightInsertComponent implements OnInit {
  flight: FLight;
  addNewProcess = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //get URL without query param
    let currentUrl = this.router.url.split('?')[0];

    if (currentUrl == '/flight/flight-edit') {
      this.addNewProcess = false;
      // get parameter from router
      this.activatedRoute.queryParams.subscribe(params => {
        this.flight = JSON.parse(params["selectedFlight"]);
      });

    } else if (this.router.url == '/flight/flight-insert') {
      this.addNewProcess = true;
      this.flight = new FLight();
    }
  }

  addFlight() {
    let jsonParam = {
      queryParams: {
        flightDto: JSON.stringify(this.flight),
        addNewFLight:  true
      },
      skipLocationChange: true
    };    
    this.router.navigate([''], jsonParam);
  }

  editFlight() {
    let jsonParam = {
      queryParams: {
        flightDto: JSON.stringify(this.flight),
        addNewFLight:  false
      },
      skipLocationChange: true
    };    
    this.router.navigate([''], jsonParam);
  }
}
