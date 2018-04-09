import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-impresora',
  template: `
  <div class='container'>
  <div class='row'>
    <bbl-form-td class="col-6"></bbl-form-td>
    <bbl-form-md class="col-6"></bbl-form-md>
  </div>
</div>
  `,
  styles: []
})
export class ImpresoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
