import { Component, OnInit } from '@angular/core';

import { City } from './city';
import { CityService } from './city.service';


@Component({
  selector: 'my-dashboard',
   templateUrl: './app/dashboard.component.html',
   styleUrls: [ './app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities()
      .then(cities => this.cities = cities.slice(0, 4));
  }
}
