import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bbl-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})
export class LibrosBuscarComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // Siempre que hay un array es buena practica inicializarlo.
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  // Via promesas

  buscar() {
    this.aLibros = [];
    const url = this.urlBase + this.clave;
    this.http.get(url).toPromise()
    .then(
       (response: any) => {
        console.log(response);
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
      },
    );    // .catch((error) => console.log(error));
    this.clave = '';
  }

  // Via observables

  buscarRx() {
    this.aLibros = [];
    const url = this.urlBase + this.clave;
    this.http.get(url)
    .subscribe(
       (response: any) => {
        console.log(response);
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
      },
    );    // .catch((error) => console.log(error));
    this.clave = '';
  }
}

