import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable()
export class GbooksService {

  urlBase: string;
  aLibros: Array<string>;

  // Inyectamos el servicio de busqueda. Podemos crear nuestro servicio y luego usarlo desde otro.
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string) {
    this.aLibros = [];
    const url = this.urlBase + clave;
    return this.http.get(url).toPromise()
    .then(
       (response: any) => {
        console.log(response);
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
        // Este return es el de la función anónima
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve, reject) => resolve(this.aLibros));
      },
    );
  }

  getLibrosRx(clave: string) {
    this.aLibros = [];
    const url = this.urlBase + clave;

    return this.http.get(url).pipe(
      response => this.extractTitles(response)
    );
  }

  private extractTitles(response: any) {
    if (response.items) {
      return response.items.map(book => book.volumeInfo.title);
    } else {
      return response;
    }
  }

}
