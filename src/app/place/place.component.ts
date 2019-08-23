import { Component, OnInit } from '@angular/core';
import { PlacesServices } from './palces.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [PlacesServices]
})
export class PlaceComponent implements OnInit {
  places = [];
  constructor(private placesService:PlacesServices) {
    this.places = placesService.getPlaces();
  }

  ngOnInit() {
  }

}
