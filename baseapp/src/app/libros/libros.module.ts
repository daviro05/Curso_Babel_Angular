import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ],
  declarations: [LibrosComponent, LibrosMockComponent],
  providers: [BooksService],
  exports: [LibrosComponent]
})
export class LibrosModule { }
