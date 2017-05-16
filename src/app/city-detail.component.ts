import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'my-city-detail',
  templateUrl: './app/city-detail.component.html',
  styleUrls: [ './app/city-detail.component.css' ]
})

export class CityDetailComponent implements OnInit {
	@Input()
	city: City;

	constructor(
  private cityService: CityService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.cityService.getCity(+params['id']))
    .subscribe(city => this.city = city);
	}

goBack(): void {
  this.location.back();
}

save(): void {
}


}
