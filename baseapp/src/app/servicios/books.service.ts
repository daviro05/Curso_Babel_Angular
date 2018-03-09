import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'La Sombra del Viento',
      'El Nombre del Viento',
      'Angular Ninja',
      'Angular Avanzado'
    ];
   }

   // Queremos que una funcion simule la busqueda de libros. Recibirá un param que sera de tipo string

   getLibros(clave: string) {
    return this.aLibros;
   }

   getLibrosAsinc(clave: string) {
     // Retorna una promesa que tiene como argumento una funcion. Que tiene a su vez dos funciones: resolve y reject
     return new Promise( (resolve, reject) => {

      // Generamos asincronia. Con setTimeout que tiene a su vez dos parametros, la primera una arrow y la segunda el tiempo.
      // Pasados 4 segundos quiero que se ejecute mi funcion resolve.
      setTimeout(() => { resolve(this.aLibros); }, 4000);

     } );
   }

}
