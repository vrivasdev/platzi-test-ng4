import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { PlacesServices } from './palces.service';

describe('PlaceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    });
  });
  it('should create the app', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same places as the service', () => {
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    let placeService = fixture.debugElement.injector.get(PlacesServices);
    expect(app.places).toEqual(placeService.places);
  });
});
