import { Component, OnInit } from '@angular/core';
import { detailsJourBouchon } from '../detailJour';
import { SearchComponentComponent } from '../search-component/search-component.component';

@Component({
    selector: 'app-meteo-app',
    templateUrl: './meteo-app.component.html',
    styleUrls: ['./meteo-app.component.css']
})
export class MeteoAppComponent implements OnInit {

    detailJourBouchon: any;
    detailSuivantBouchon: any;
    url = "https://www.prevision-meteo.ch/services/json/";
    villeRecherche = "Nantes";
    constructor() { }

    ngOnInit(): void {
      this.detailJourBouchon = {};
      this.detailSuivantBouchon = [];
        fetch(this.url + this.villeRecherche)
            .then(response => {
                return response.json();
            })
            .then(jsonResp => {
                //Jour courant
                this.detailJourBouchon.name = jsonResp.city_info.name;
                this.detailJourBouchon.sunrise = jsonResp.city_info.sunrise;
                this.detailJourBouchon.sunset = jsonResp.city_info.sunset;
                this.detailJourBouchon.condition = jsonResp.current_condition.condition;
                this.detailJourBouchon.icon = jsonResp.current_condition.icon;
                this.detailJourBouchon.tmp = jsonResp.current_condition.tmp;

                //Jours suivants
                let indexJour = 1;
                while(jsonResp[`fcst_day_${indexJour}`] != null) {
                    let dynamismeAlEtatPure = jsonResp[`fcst_day_${indexJour}`];
                    this.detailSuivantBouchon.push({
                        day_short: dynamismeAlEtatPure.day_short,
                        condition: dynamismeAlEtatPure.condition,
                        icon: dynamismeAlEtatPure.icon,
                        tmin: dynamismeAlEtatPure.tmin,
                        tmax: dynamismeAlEtatPure.tmax,
                    });
                    indexJour++;
                }
            })
            .catch(error => {
                console.log("un problème est survenu !!");
                console.log(error.message);
                let lblError = document.querySelector("#lblError");
                // lblError.style.display = "inline";
                // lblError.innerText = `Ville ${this.villeRecherche} inconnue`
            });
    }

}
