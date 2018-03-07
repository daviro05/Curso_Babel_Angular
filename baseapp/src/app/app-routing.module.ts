import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';

// Aqui pondremos las rutas de los distintos componentes.
const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'about', component: AboutComponent },
{ path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
{ path: 'comunics', loadChildren: './comunics/comunics.module#ComunicsModule' },
{ path: '', pathMatch: 'full', redirectTo: 'inicio' }
]; // constante de tipo Routes que es un array de objetos.

@NgModule({
  imports: [RouterModule.forRoot(routes)], // La funcion forRoot indica a Angular que tiene que importar el conjuntos de rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
