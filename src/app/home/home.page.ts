import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

//zavolani environment - zavolani api key a api url
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public httpClient: HttpClient) {
    this.loadData() //loaddata pokaždé když jdu an homepage
  }

  //vyuziti http klienta k dostani odpovedi od API pomocí get, prvni parametr q = jméno města, druhy parametr je api key
  //results log - logování
  loadData() {
    this.httpClient.get('${API_URL}/weather?q = ${"Prague"}&appid=${API_KEY}').subscribe(results => { console.log(results);})
  }
}
