import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LogingComponent } from './loging/loging.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"nosotros",
    component:NosotrosComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"productos",
    component:ProductosComponent
  },
  {
    path:"servicios",
    component:ServiciosComponent
  },
  {
    path:"registarse",
    component:RegistrarseComponent
  },
  {
    path:"login",
    component:LogingComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
