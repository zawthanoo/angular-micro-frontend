import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import flightData from './flight.data.json'
import { FLight } from './flight.model';

@Injectable({
    providedIn: 'root'
})
export class FlightDataStore {
    flightList : FLight[] = flightData;

    constructor() {}

    getFlistList() {
        return this.flightList;
    }

    addFlight(flightDto : FLight) {
        this.flightList.push(flightDto);
    }

    editFlight(flightDto : FLight) {
        let itemIndex = this.flightList.findIndex(item => item.flightNo == flightDto.flightNo);
        this.flightList[itemIndex] = flightDto;
    }
}