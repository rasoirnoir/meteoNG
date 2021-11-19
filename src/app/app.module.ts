import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoAppComponent } from './meteo-app/meteo-app.component';
import { MeteoJourComponent } from './meteo-jour/meteo-jour.component';
import { MeteoJourSuivantComponent } from './meteo-jour-suivant/meteo-jour-suivant.component';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoAppComponent,
    MeteoJourComponent,
    MeteoJourSuivantComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
