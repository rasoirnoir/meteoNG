import { Component, Input, OnInit } from '@angular/core';
import { DetailSuivant } from '../detailSuivant';

@Component({
  selector: 'app-meteo-jour-suivant',
  templateUrl: './meteo-jour-suivant.component.html',
  styleUrls: ['./meteo-jour-suivant.component.css']
})
export class MeteoJourSuivantComponent implements OnInit {

  @Input() detail: DetailSuivant | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.detail);
  }

}
