import { Component, Input, OnInit } from '@angular/core';
import { DetailJour } from '../detailJour';

@Component({
  selector: 'app-meteo-jour',
  templateUrl: './meteo-jour.component.html',
  styleUrls: ['./meteo-jour.component.css']
})
export class MeteoJourComponent implements OnInit {

  @Input() detailJour: DetailJour | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
