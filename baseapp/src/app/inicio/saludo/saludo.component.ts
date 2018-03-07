import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaludoComponent implements OnInit {
  sNombre: string;
  user: any;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'David';
    this.user = {Nombre: 'David', Apellido: 'Rodríguez'};
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
