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
    <h1>{{title}}</h1>
  
    <h1 id="welcomeMessage">Welcome to the City-Guide!</h1>
    <nav>
      <a id="ChoiceDash" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a id="ChoiceCity" routerLink="/cities" routerLinkActive="active">Cities</a>
    </nav>
    <router-outlet></router-outlet>

  `
})

export class AppComponent {
  title = 'City-guide';
}
