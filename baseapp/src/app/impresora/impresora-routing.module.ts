import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpresoraComponent } from './impresora.component';

const routes: Routes = [
  { path: '', component: ImpresoraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpresoraRoutingModule { }
