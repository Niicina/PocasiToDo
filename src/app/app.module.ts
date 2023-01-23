import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//přidání locale cs pro datum v cs formátu
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';

registerLocaleData(localeCs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide:LOCALE_ID, useValue: "cs"  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
