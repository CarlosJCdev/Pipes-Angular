import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//Podemos agregar varias importaciones para cada idioma
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeEs);
registerLocaleData(localeEn);
registerLocaleData(localeFr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
