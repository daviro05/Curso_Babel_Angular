import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
