import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ContactosRoutingModule,
    HttpClientModule
  ],
  exports: [
    ContactosComponent
  ],
  declarations: [ContactosComponent]
})
export class ContactosModule { }
