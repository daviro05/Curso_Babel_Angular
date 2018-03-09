import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'bbl-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    // Siempre que hay un array es buena practica inicializarlo.
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = [];
    this.aLibros = this.booksService.getLibros(this.clave);
    this.clave = '';
  }

  buscarAsync() {
    // Para poder recoger las promesas nos facilitan los metodos catch y then.
    // then es lo qe quiero que se ejecute automaticamente cuando se haga correctamente. Y catch cuándo no se ejecute correctamente.
    this.booksService.getLibrosAsinc(this.clave).then( (response: any) => this.aLibros = response);
    this.clave = '';

    // Como en el resolve se esta enviando this.aLibros. El response recoge un aLibros.
    // Que se lo asignamos a nuestro aLibros despues de que pasen 4 segundos en la funcion de getLibrosAsync
  }

}
