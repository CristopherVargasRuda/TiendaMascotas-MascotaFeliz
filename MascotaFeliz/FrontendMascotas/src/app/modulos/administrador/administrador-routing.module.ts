import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path:"lista-usuarios",
    component:ListaUsuariosComponent
  },
  {
    path:"lista-mascotas",
    component:ListaMascotasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
