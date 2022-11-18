import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { ListaPlanesComponent } from './lista-planes/lista-planes.component';

import { GridJsAngularModule } from 'gridjs-angular';





@NgModule({
  declarations: [
    ListaUsuariosComponent,
    ListaMascotasComponent,
    ListaSucursalesComponent,
    ListaPlanesComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    GridJsAngularModule]
  
})
export class AdministradorModule { }
