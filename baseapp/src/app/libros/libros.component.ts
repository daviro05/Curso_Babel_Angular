import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-libros',
  template: `
 <div class='container'>
  <div class='row'>
    <bbl-libros-mock class="col-6"></bbl-libros-mock>
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
