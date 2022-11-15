import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LogingComponent } from './loging/loging.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    ContactoComponent,
    ProductosComponent,
    ServiciosComponent,
    RegistrarseComponent,
    LogingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
