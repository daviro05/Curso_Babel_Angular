import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
 <div class='container'>
  <div class='row'>
    <bbl-libros-mock class="col-6"></bbl-libros-mock>
    <bbl-libros-buscar class="col-6"></bbl-libros-buscar>
    <bbl-libros-services class="col-6"></bbl-libros-services>
  </div>
</div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
