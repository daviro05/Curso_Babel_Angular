import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bbl-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('locNombre') elemName: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.elemName);
  }

}
