import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
 

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
  mesto: any
  pocasiIkona: any 
  pocasiDetail: any
  path:any = "obrazek"
  constructor(public httpClient: HttpClient) {
    this.loadData() //loaddata pokaždé když jdu an homepage
  }

  //vyuziti http klienta k dostani odpovedi od API pomocí get, prvni parametr q = jméno města, druhy parametr je api key
  //results log - logování
  loadData() {
    this.httpClient.get<any>(`${API_URL}/weather?q=${"Brno"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      //dostani teploty z vysledku od get z API - json odpoved 'temp'- v main polozka temperature a logovani
      this.teplota = results['main']
      this.mesto = results['name']
      console.log(this.teplota);
      this.pocasiIkona= results ['weather'][1]
      console.log(this.pocasiDetail);
      //ikona zavisi na tom jake je pocasi - z API
      this.pocasiIkona= `http://openweathermap.org/img/wn/${this.pocasiDetail.icon}@2x.png`
     

    })
  }
}
