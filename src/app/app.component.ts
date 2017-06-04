import {Component} from '@angular/core';

import {City} from './city';
import {CityService} from './city.service';
import {CitiesComponent}  from './cities.component';
import {DashboardComponent}  from './dashboard.component';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  template: `

!--ovdje ispod mozete upravljati direkciju slanja podataka tim buttonima, ja sam zakomentirala ova prethodna
dva jer njih nemamo, ovaj treci je onaj koji sam ja sad napravila.
	
  
    <!--h1 id="welcometxt">Welcome to the City-Guide!</h1-->
    <nav>
      <!--a id="ChoiceDash" routerLink="/dashboard" routerLinkActive="active">Dashboard</a-->
      <!--a id="ChoiceCity" routerLink="/cities" routerLinkActive="active">Cities</a-->
	  <!--a id="detailButton" routerLink="/city-detail.component" routerLinkActive="active">Details</a-->
    </nav>
	
	
    <router-outlet></router-outlet>

  `
})

export class AppComponent {
  title = 'City-guide';
}
