import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpresoraRoutingModule } from './impresora-routing.module';
import { ImpresoraComponent } from './impresora.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ImpresoraRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ImpresoraComponent],
  declarations: [ImpresoraComponent, FormTdComponent, FormMdComponent]
})
export class ImpresoraModule { }
