import { Injectable } from '@angular/core';

@Injectable()
export class PlacesServices {
    places = [
        {id: 1, name: 'Platzi HQ'},
        {id: 1, name: 'Zapateria el Clavo'},
    ];
    getPlaces() {
        return this.places;
    }
}