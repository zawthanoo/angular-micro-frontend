import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInsertComponent } from './flight-insert.component';

describe('FlightInsertComponent', () => {
  let component: FlightInsertComponent;
  let fixture: ComponentFixture<FlightInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
