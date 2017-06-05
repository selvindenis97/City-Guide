import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { City } from './city';
import { CityService } from './city.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-cities',
  styleUrls: [ './app/cities.component.css' ],
  templateUrl: './app/cities.component.html',
})

export class CitiesComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  constructor( private router: Router,
  private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }
  ngOnInit(): void {
    this.getCities();
  }
  onSelect(city: City): void {
    this.selectedCity = city;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCity.id]);
  }
}

