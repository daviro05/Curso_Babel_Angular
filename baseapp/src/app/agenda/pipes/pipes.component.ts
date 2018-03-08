import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sNombre: string;
  dFecha: Date;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'David Rodríguez';
    this.dFecha = new Date();
  }

}
