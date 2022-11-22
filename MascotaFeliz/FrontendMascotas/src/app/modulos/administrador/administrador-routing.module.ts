import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {
    path:"lista-usuarios",
    component:ListaUsuariosComponent
  },
  {
    path:"lista-mascotas",
    component:ListaMascotasComponent
  },
  {
    path:"nuevo-plan",
    component:NuevoPlanComponent
  },
  {
    path:'nuevo-usuario',
    component:NuevoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
