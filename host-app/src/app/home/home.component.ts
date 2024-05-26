import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FlightDataStore } from '../flight.data.store';
import { FLight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  flightList: FLight[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private flightDataStore : FlightDataStore) { 
    this.flightList = this.flightDataStore.getFlistList();
  }

  ngOnInit() {
      // get parameter from router
      this.activatedRoute.queryParams.subscribe(params => {
        if(params["flightDto"]) {
          let flightDto = JSON.parse(params["flightDto"]);
          let addNewFLight = params["addNewFLight"];
          console.log("XXXXX "  + addNewFLight);
          
          if(addNewFLight == 'true') {
            console.log("New Flight " + JSON.stringify(flightDto));    
            this.flightDataStore.addFlight(flightDto);
          } else {
            this.flightDataStore.editFlight(flightDto);
          }
        }
      });
      this.flightList = this.flightDataStore.getFlistList();

  }

  editFlight(selectedFlight: any) {
    // parameter passing by router
    let jsonParam = {
      queryParams: {
        selectedFlight: JSON.stringify(selectedFlight)
      },
      skipLocationChange: true
    };
    this.router.navigate(['/flight/flight-edit'], jsonParam);
  }
}
