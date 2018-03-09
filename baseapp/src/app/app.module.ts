import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InicioModule } from './inicio/inicio.module';
import { AboutModule } from './about/about.module';

import {FormsModule} from '@angular/forms';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TruncarPipe } from './pipes/truncar.pipe';

registerLocaleData(localeEs);

// Decorador de clase
@NgModule({
  declarations: [
    AppComponent,
    TruncarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    AboutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
