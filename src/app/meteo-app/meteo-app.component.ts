import { Component, OnInit } from '@angular/core';
import { detailsJourBouchon } from '../detailJour';
import { detailsSuivantBouchon } from '../detailSuivant';

@Component({
  selector: 'app-meteo-app',
  templateUrl: './meteo-app.component.html',
  styleUrls: ['./meteo-app.component.css']
})
export class MeteoAppComponent implements OnInit {

  detailJourBouchon = detailsJourBouchon;
  detailSuivantBouchon = detailsSuivantBouchon;
  constructor() { }

  ngOnInit(): void {
  }

}
