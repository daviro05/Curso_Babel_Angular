import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImpresoraIf, DptoIf} from '../../modelos/master.model';
import { Impresoras, Dptos} from '../../modelos/master.data';
import { OrdenImprimirIf } from '../../modelos/ordenimprimir.model';
import { FormGroup, FormControl } from '@angular/forms';
import { isProtractorLocator } from 'protractor/built/locators';

@Component({
  selector: 'bbl-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  formulario: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      impresora: new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl(),
      departamento: new FormControl(),
    });
  }

  enviar() {

  }

}
