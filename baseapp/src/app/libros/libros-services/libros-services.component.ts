import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GbooksService } from '../../servicios/gbooks.service';

@Component({
  selector: 'bbl-libros-services',
  templateUrl: './libros-services.component.html',
  styleUrls: ['./libros-services.component.css']
})
export class LibrosServicesComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public gbook: GbooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.gbook.getLibros(this.clave)
    .then( (response: any) => this.aLibros = response);
  }

}

