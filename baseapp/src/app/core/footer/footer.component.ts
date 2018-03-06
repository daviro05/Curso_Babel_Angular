import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'David Rodríguez';
    this.lugar = 'Babel Sistemas de Información';
    this.fecha = '06/03/2018';
  }

}
