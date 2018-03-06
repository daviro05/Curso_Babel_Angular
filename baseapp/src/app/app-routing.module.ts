import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'about', component: AboutComponent },
{ path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
{ path: '', pathMatch: 'full', redirectTo: 'inicio' }
]; // constante de tipo Routes que es un array de objetos.

@NgModule({
  imports: [RouterModule.forRoot(routes)], // La funcion forRoot indica a Angular que tiene que importar el conjuntos de rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
