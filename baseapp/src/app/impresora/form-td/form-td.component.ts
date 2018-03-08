import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImpresoraIf, DptoIf} from '../../modelos/master.model';
import { Impresoras, Dptos} from '../../modelos/master.data';
import { OrdenImprimirIf } from '../../modelos/ordenimprimir.model';

@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aImpresoras: Array<ImpresoraIf>;
  aDptos: Array<DptoIf>;
  ordenImprimir: OrdenImprimirIf;
  @ViewChild('formImpresora') formulario: ElementRef;
  constructor() { }

  ngOnInit() {
    this.aImpresoras = Impresoras;
    this.aDptos = Dptos;
    this.ordenImprimir = {
      user: {nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      icClaro: false,
      dpto: {id: '', name: ''}
    };

    console.dir(this.formulario);
  }

  enviar() {
    console.log('Datos enviados');
  }

  borrar() {
    // this.formulario.reset();
  }

}
