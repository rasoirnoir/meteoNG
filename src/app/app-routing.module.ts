import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoAppComponent } from './meteo-app/meteo-app.component';

const routes: Routes = [
  {path: '', component: MeteoAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
