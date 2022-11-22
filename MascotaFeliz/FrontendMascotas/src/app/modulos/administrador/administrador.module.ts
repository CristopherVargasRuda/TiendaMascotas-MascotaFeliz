import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { ListaPlanesComponent } from './lista-planes/lista-planes.component';

import { GridJsAngularModule } from 'gridjs-angular';
import { NuevaMascotaComponent } from './lista-mascotas/nueva-mascota/nueva-mascota.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ModificarUsuarioComponent } from './lista-usuario/modificar-usuario/modificar-usuario.component';
import { ModificarMascotaComponent } from './lista-mascotas/modificar-mascota/modificar-mascota.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ListaUsuariosComponent,
    ListaMascotasComponent,
    ListaSucursalesComponent,
    ListaPlanesComponent,
    NuevaMascotaComponent,
    NuevoUsuarioComponent,
    ModificarUsuarioComponent,
    ModificarMascotaComponent,
    NuevoPlanComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    GridJsAngularModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AdministradorModule { }
