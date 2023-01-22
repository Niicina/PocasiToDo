import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
registerLocaleData(localeCs, 'cs');



//zavolani environment - zavolani api key a api url
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //promenna teplota
  teplota : any
  dnesniDen = new Date
  constructor(public httpClient: HttpClient) {
    this.loadData() //loaddata pokaždé když jdu an homepage
  }

  //vyuziti http klienta k dostani odpovedi od API pomocí get, prvni parametr q = jméno města, druhy parametr je api key
  //results log - logování
  loadData() {
    this.httpClient.get<any>(`${API_URL}/weather?q=${"Prague"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      //dostani teploty z vysleddku od get - json odpoved 'temp'- v main polozka temperature a logovani
      this.teplota = results['main']
      console.log(this.teplota);
     
     

    })
  }
}
